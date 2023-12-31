// 1. articlesに型を付けてください
// 2. 公開済みの記事だけを返す関数を書いてください

type Article = {
    id:number;
    title:string;
    content:string;
    isPublished:boolean;
  }
  
  type ArticlesType = Article[]
  
  export const articles: ArticlesType = [
    {
      id: 1,
      title: 'My first post',
      content: 'Hello world!',
      isPublished: true
    },
    {
      id: 2,
      title: 'A new post',
      content: '',
      isPublished: false
    },
    {
      id: 3,
      title: '日本語でも投稿しよう',
      content: "こんにちは。さようなら。",
      isPublished: true
    }
  ]
  
  export function filterPublishFunc (articles:ArticlesType):ArticlesType{
    return articles.filter(article => article.isPublished)
  }
  