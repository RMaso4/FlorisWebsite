// src/app/api/news/route.ts
import { NextResponse } from 'next/server';

const GNEWS_API_KEY = process.env.GNEWS_API_KEY;
const GNEWS_API_URL = 'https://gnews.io/api/v4/top-headlines';

export async function GET() {
  if (!GNEWS_API_KEY) {
    console.error('GNEWS_API_KEY is not defined');
    return NextResponse.json(
      { error: 'API configuration error' },
      { status: 500 }
    );
  }

  try {
    const params = new URLSearchParams({
      country: 'nl',
      lang: 'nl',
      category: 'business',
      apikey: GNEWS_API_KEY,
      max: '10'  // Limit to 10 articles
    });

    const response = await fetch(`${GNEWS_API_URL}?${params.toString()}`, {
      next: { revalidate: 1800 } // Cache for 30 minutes
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('GNews API error:', errorData);
      throw new Error(errorData.errors?.[0] || 'Failed to fetch news');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json(
      { error: 'Error fetching news' },
      { status: 500 }
    );
  }
}