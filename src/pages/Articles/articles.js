import { useGetArticles } from "../../hooks/getarticle";
export function Articles() {
  const {articles}=useGetArticles();
return (
  <div> 
        {articles.map((article) => (
            <>
              <h3>{article.title}</h3>
            <br/>
            <p>{article.intro}</p>
            </>
        ))}
    </div>
);
};