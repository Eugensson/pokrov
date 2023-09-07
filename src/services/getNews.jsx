export const getAllNews = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

if (!response.ok) throw new Error('Unable to fetch news.');

return response.json();
};

export const getNewsBySearch = async search => {  
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${search}`
  );

if (!response.ok) throw new Error('Unable to fetch news.');

return response.json();
};
  