import { scrapePinterestBoard } from '../../lib/pinterest';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { url } = await request.json();
    const images = await scrapePinterestBoard(url);
    return NextResponse.json({ images });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}