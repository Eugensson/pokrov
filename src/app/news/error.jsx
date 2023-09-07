'use client';

export default function ErrorWrapper({ error }) {
  return <h2>Oops!!! {error.message} </h2>;
}
