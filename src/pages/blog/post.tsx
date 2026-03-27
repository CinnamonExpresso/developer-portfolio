import { useParams } from 'react-router-dom'
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import * as runtime from "react/jsx-runtime";
import { compile } from "@mdx-js/mdx";
import { useState, useEffect } from 'react';
import { FetchMDFile } from "../../components/utils/useArticlesmd";

export default function Post() {
  const [MDXContent, setMDXContent] = useState<null | React.FC>(() => null);
  const [loading, setLoading] = useState(true);
  const [basicInfo, setBasicInfo] = useState(null);

  const { post } = useParams();

  if (!post) {
    return <p style={{ padding: '6rem 3rem' }}>Post not found.</p>
  }

  useEffect(() => {
    const load = async () => {
      const res = await FetchMDFile(`/posts/${String(post)}`);
      const compiled = await compile(res.body, {
        outputFormat: 'function-body',
        useDynamicImport: false,
        remarkPlugins: [remarkMath, remarkGfm],
        rehypePlugins: [rehypeKatex],
      });

      const mdxModule = new Function(String(compiled))(runtime);
      setMDXContent(() => mdxModule.default);
      setLoading(false);
      if(res.data != undefined){
        setBasicInfo(res?.data)
      }
    };

    load();
  }, []);

  if (loading || !MDXContent) {
    return <div className="blog-loading">Loading article...</div>;
  }

  return (
    <article className="page blog-post">
      <header className="post-header">
        <h1>{basicInfo?.title}</h1>
        <span className="post-date">{basicInfo?.date}</span>
      </header>

      <div className="post-content">
          <MDXContent components={{ InlineMath }}/>
      </div>
    </article>
  )
}
