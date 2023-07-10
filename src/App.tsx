import "./App.css";
import { Article } from "./articles";
import Card from "./UI/Card";
import { ReactQueryDevtools } from "react-query/devtools";
import { useQuery } from "react-query";

export default function App() {
  async function getPostsData(): Promise<Article[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data as Article[];
  }

  const { data, isLoading, isError } = useQuery("posts", getPostsData);

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>something Happen</span>;
  }

  return (
    <main>
      {data?.map((article) => (
        <Card key={article.id}>
          <p>No.{article.id}</p>
          <p>{article.title}</p>
          <div>{article.body}</div>
        </Card>
      ))}
      <ReactQueryDevtools initialIsOpen={false} />
    </main>
  );
}
