import { NextResponse } from 'next/server'
import { client, queries } from '../../../../sanity/client'

export async function GET() {
  try {
    const hp = await client.fetch(queries.homepage)
    // Also test a minimal query directly
    const minimal = await client.fetch(`*[_type == "homepage"][0]{ heroImage{ asset->{ url } } }`)
    return NextResponse.json({
      // From queries.homepage
      heroImageUrl: hp?.heroImage?.asset?.url ?? null,
      heroImageRaw: hp?.heroImage ?? null,
      // From minimal query
      minimalHeroImageUrl: minimal?.heroImage?.asset?.url ?? null,
      minimalHeroImageRaw: minimal?.heroImage ?? null,
      hasHomepage: !!hp,
      token: process.env.SANITY_API_TOKEN ? 'SET' : 'NOT SET',
      // Show the actual query string being used
      querySnippet: queries.homepage.substring(0, 200),
    })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
