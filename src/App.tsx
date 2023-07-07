import "./App.css";
import { articles, filterPublishFunc } from "./articles";
// 課題1の成果をarticles.tsに反映して、
// ここから呼び出してみましょう。

const publishedArticles = filterPublishFunc(articles);

const posts = publishedArticles.map((article) => (
  <>
    <p>{article.title}</p>
    <div>{article.content}</div>
  </>
));

export default function App() {
  return (
    <main>
      <p>課題1の成果を基に、公開記事の一覧を表示してください。</p>
      <div>
        <div>{posts}</div>
      </div>
    </main>
  );
}
