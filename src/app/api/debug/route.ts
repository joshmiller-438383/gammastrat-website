import { NextResponse } from 'next/server'
import { client, queries } from '../../../../sanity/client'

async function getSanityData() {
  try {
    const homepage = await client.fetch(queries.homepage)
    return { homepage }
  } catch (err) {
    console.error('[Sanity fetch error]', err)
    return { homepage: null }
  }
}

export async function GET() {
  try {
    // Simulate EXACT page.tsx code path
    const { homepage: hp } = await getSanityData()
    
    return NextResponse.json({
      // Exact same expressions as page.tsx
      heroImageUrl_pagePath: hp?.heroImage?.asset?.url ?? null,
      problemImageUrl_pagePath: hp?.problemImage?.asset?.url ?? null,
      solutionImageUrl_pagePath: hp?.solutionImage?.asset?.url ?? null,
      // Raw heroImage object
      heroImageRaw: hp?.heroImage ?? null,
      hasHomepage: !!hp,
      token: process.env.SANITY_API_TOKEN ? 'SET' : 'NOT SET',
    })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
