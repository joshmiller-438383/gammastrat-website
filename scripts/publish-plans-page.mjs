/**
 * Publish the plansPage draft document in Sanity.
 * Run: node scripts/publish-plans-page.mjs
 */
import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'

const envLocal = readFileSync('.env.local', 'utf8')
const tokenLine = envLocal.split('\n').find(l => l.startsWith('SANITY_API_TOKEN='))
const token = tokenLine ? tokenLine.split('=').slice(1).join('=').trim() : ''

const client = createClient({
  projectId: 'fa41e7wa',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token,
})

async function main() {
  // The document was created with _id = 'plansPage' which means it's already published
  // (not a draft — drafts have _id starting with 'drafts.')
  // Let's verify and also check for drafts
  
  const [published, draft] = await Promise.all([
    client.fetch(`*[_id == "plansPage"][0]{ _id, _rev }`),
    client.fetch(`*[_id == "drafts.plansPage"][0]{ _id, _rev }`),
  ])
  
  console.log('Published doc:', published ? `✅ exists (rev: ${published._rev?.substring(0,8)})` : '❌ missing')
  console.log('Draft doc:', draft ? `⚠️ exists (rev: ${draft._rev?.substring(0,8)})` : '✅ no draft')
  
  if (!published) {
    console.log('Creating published document...')
    // Read the draft content and publish it
    const draftContent = await client.fetch(`*[_id == "drafts.plansPage"][0]`)
    if (draftContent) {
      const { _id, ...rest } = draftContent
      await client.createOrReplace({ ...rest, _id: 'plansPage' })
      console.log('✅ Published from draft!')
    } else {
      console.log('No draft found either — document may already be published correctly')
    }
  } else {
    console.log('✅ Document is already published and readable by the live site.')
  }
}

main().catch(err => {
  console.error('Error:', err.message)
  process.exit(1)
})
