import { NextResponse } from 'next/server';
import { news } from '@/app/api/news/news';

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const query = searchParams.get('q');

  let currentNews = news;

  if (query) {
    currentNews = news.filter(oneNews =>
      oneNews.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  return NextResponse.json(currentNews);
}

export async function POST(req) {
  const body = await req.json();

  console.log(body);

  return NextResponse.json({ body });
}
