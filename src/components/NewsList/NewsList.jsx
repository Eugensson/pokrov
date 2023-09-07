'use client';

import useSWR from 'swr';
import Link from 'next/link';
import { getAllNews } from '@/services/getNews';

const NewsList = () => {
  const { data: news, isLoading } = useSWR('news', getAllNews);

  return isLoading ? (
    <h3>Loading... </h3>
  ) : (
    <ul>
      {news.map(({ id, title }) => (
        <li key={id}>
          <Link href={`/news/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export { NewsList };
