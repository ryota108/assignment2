// 1. articlesに型を付けてください
// 2. 公開済みの記事だけを返す関数を書いてください

export type Article = {
   userId:number;
    id:number;
    title:string;
    body:string;
  }
  
  type ArticlesType = Article[]
  
  // export const articles: ArticlesType = [
  //   {
  //     id: 1,
  //     title: 'My first post',
  //     content: 'Hello world!',
  //     isPublished: true
  //   },
  //   {
  //     id: 2,
  //     title: 'A new post',
  //     content: '',
  //     isPublished: false
  //   },
  //   {
  //     id: 3,
  //     title: '日本語でも投稿しよう',
  //     content: "こんにちは。さようなら。",
  //     isPublished: true
  //   }
  // ]
  
  // function filterPublishFunc (articles:ArticlesType):ArticlesType{
  //   return articles.filter(article => article.isPublished)
  // }

  // export function sleep(msec: number) {
  //   return new Promise((resolve) => setTimeout(resolve, msec));
  // }

  
  // export async function fetchPublicArticles(): Promise<Article[]> {
  //   await sleep(2000);
  //   return filterPublishFunc(articles);
  // }
  