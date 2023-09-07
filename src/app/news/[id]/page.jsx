export async function generateMetadata({ params }) {
  const { id } = params;
  const { title } = await getData(id);
  return { title };
}

async function getData(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: { revalidate: 60 },
    }
  );
  return response.json();
}

export default async function News({ params }) {
  const { id } = params;
  const { title, body } = await getData(id);

  return (
    <section>
      <h2>{title}</h2>
      <p>{body}</p>
    </section>
  );
}
