"use client";

import React, { useEffect, useState } from "react";

interface FavoriteArticleProps {
  id: number;
}

export default function FavoriteArticle({ id }: FavoriteArticleProps) {
  const [article, setArticle] = useState<{ title: string; body: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      setIsLoading(true);
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await res.json();
      setArticle(data);
      setIsLoading(false);
    }
    fetchArticle();
  }, [id]);

  if (isLoading) return <p>Loading article {id}...</p>;

  if (!article) return <p>Article not found</p>;

  return (
    <div>
      <h3>{article.title}</h3>
      <p>{article.body}</p>
    </div>
  );
}
