import { FetchMDFile } from "../../components/utils/useArticlesmd";
import ReactMarkdown from "react-markdown";
import {useState, useEffect} from "react";

const BasicArticles = ({title}:any) => {
    const [resources, setResources] = useState<null | { data: any; body: string }>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    FetchMDFile(`/misc/${title}`).then((res) => {
      setResources(res);
      setLoading(false);
    });
  }, []);

  if (loading || !resources) {
    return <div className="blog-loading">Loading article...</div>;
  }

return (
  <article className="page blog-post">
        <div className="post-content">
            <header className="post-header">
              <h1>{title.split("-").map((word:string) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}</h1>
              <span className="post-date"></span>
            </header>
            <div>
                <ReactMarkdown>{resources.body}</ReactMarkdown>
            </div>
        </div>
      </article>
    )
}

export default BasicArticles;