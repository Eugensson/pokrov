import { NewsSearch } from '@/components/NewsSearch/NewsSearch';
import { NewsList } from '@/components/NewsList/NewsList';

export const metadata = {
  title: 'Новини | НВФ Покров',
};

export default function News() {
  return (
    <>
      <h1>Сторінка новин</h1>
      <NewsSearch />
      <NewsList />
    </>
  );
}
