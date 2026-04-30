import { NextResponse } from 'next/server'
import { client, queries } from '../../../../sanity/client'

export async function GET() {
  try {
    const hp = await client.fetch(queries.homepage)
    return NextResponse.json({
      heroImageUrl: hp?.heroImage?.asset?.url ?? null,
      problemImageUrl: hp?.problemImage?.asset?.url ?? null,
      solutionImageUrl: hp?.solutionImage?.asset?.url ?? null,
      heroImageRaw: hp?.heroImage ?? null,
      hasHomepage: !!hp,
      token: process.env.SANITY_API_TOKEN ? 'SET' : 'NOT SET',
    })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
