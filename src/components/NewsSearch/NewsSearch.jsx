'use client';

import useSWR from 'swr';
import { useState } from 'react';
import { getNewsBySearch } from '@/services/getNews';

const NewsSearch = () => {
  const { mutate } = useSWR('news');
  const [search, setSearch] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const news = await getNewsBySearch(search);

    mutate(news);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export { NewsSearch };
