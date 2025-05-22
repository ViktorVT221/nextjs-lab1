// src/app/articles/[id]/page.tsx
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!['1', '2', '3'].includes(id)) {
    notFound();
  }

  return (
    <div>
      <h1>Article ID: {id}</h1>
      <p>This is the content of article {id}.</p>
    </div>
  );
}