import "./App.css";
import { useState, useEffect } from "react";
import { Article, fetchPublicArticles } from "./articles";
// 課題1の成果をarticles.tsに反映して、
// ここから呼び出してみましょう。

export default function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetchPublicArticles()
      .then((publishedArticle) => {
        setArticles(publishedArticle);
        setIsLoading(false);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <main>
      {isLoading && <p>Loading...</p>}
      {articles.map((article) => (
        <div key={article.id}>
          <p>{article.title}</p>
          <div>{article.content}</div>
        </div>
      ))}
    </main>
  );
}
