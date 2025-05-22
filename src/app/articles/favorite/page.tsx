import FavoriteArticle from "@/components/FavoriteArticle";

export default function FavoriteArticlesPage() {
  return (
    <div>
      <h1>Favorite Articles</h1>
      <FavoriteArticle id={1} />
      <FavoriteArticle id={2} />
      <FavoriteArticle id={3} />
    </div>
  );
}
