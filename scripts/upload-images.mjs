import { createClient } from '@sanity/client'
import { readFileSync, createReadStream } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Parse .env.local manually
const envPath = resolve(__dirname, '../.env.local')
const envContent = readFileSync(envPath, 'utf8')
envContent.split('\n').forEach(line => {
  const [key, ...vals] = line.split('=')
  if (key && vals.length) process.env[key.trim()] = vals.join('=').trim()
})

const client = createClient({
  projectId: 'fa41e7wa',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

// Image mapping based on the visual sheet:
// 01 = Hero visual
// 02 = Problem visual  
// 03 = Solution visual (dashboard screenshot)
// 04 = Reports visual (report stack)
// 05 = Why Different visual
// 06 = Credibility visual
// 07 = CTA visual
// 08 = Extra / Feature card 3

const imageDir = resolve(__dirname, '../../gammastrat-visuals')

async function uploadImage(filename, label) {
  const filePath = resolve(imageDir, filename)
  console.log(`Uploading ${filename} (${label})...`)
  const asset = await client.assets.upload('image', createReadStream(filePath), {
    filename,
    contentType: 'image/png',
  })
  console.log(`  ✅ ${label}: ${asset._id}`)
  return asset
}

async function main() {
  // Upload all 8 images
  const [hero, problem, solution, reports, whyDiff, credibility, cta, feature3] = await Promise.all([
    uploadImage('GammaStrat-01.png', 'Hero Visual'),
    uploadImage('GammaStrat-02.png', 'Problem Visual'),
    uploadImage('GammaStrat-03.png', 'Solution Visual'),
    uploadImage('GammaStrat-04.png', 'Reports Visual'),
    uploadImage('GammaStrat-05.png', 'Why Different Visual'),
    uploadImage('GammaStrat-06.png', 'Credibility Visual'),
    uploadImage('GammaStrat-07.png', 'CTA Visual'),
    uploadImage('GammaStrat-08.png', 'Feature 3 Visual'),
  ])

  console.log('\nPatching homepage document with image references...')

  // Fetch current homepage to get existing _key values for featureItems
  const current = await client.fetch('*[_id == "homepage"][0]{ featureItems }')
  const featureItems = current?.featureItems || []

  // Build image reference helper
  const ref = (asset) => ({ _type: 'image', asset: { _type: 'reference', _ref: asset._id } })

  // Patch the homepage document with all image references
  await client
    .patch('homepage')
    .set({
      heroImage: ref(hero),
      // Feature cards: use existing _key values, just add image
      featureItems: featureItems.map((item, i) => ({
        ...item,
        image: ref([feature3, reports, feature3][i] || feature3),
      })),
    })
    .commit()

  console.log('✅ Homepage patched with all images')
  console.log('\nImage asset IDs for reference:')
  console.log('  Hero (01):', hero._id)
  console.log('  Problem (02):', problem._id)
  console.log('  Solution (03):', solution._id)
  console.log('  Reports (04):', reports._id)
  console.log('  Why Different (05):', whyDiff._id)
  console.log('  Credibility (06):', credibility._id)
  console.log('  CTA (07):', cta._id)
  console.log('  Feature 3 (08):', feature3._id)
  console.log('\nAll images are now available in Sanity Studio under Media > Images')
  console.log('You can reassign any image to any section directly in the Studio.')
}

main().catch(err => {
  console.error('❌ Error:', err)
  process.exit(1)
})
