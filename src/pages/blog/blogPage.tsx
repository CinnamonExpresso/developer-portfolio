import matter from "gray-matter";
import { MathBackdrop, DotBackdrop } from "../../components/deco/mathBackdrop";
import { getReadingTime } from "../../components/blog/getReadingTime";

const posts = import.meta.glob("../../data/md/posts/*.md", {
  as: "raw",
  eager: true,
});

interface Frontmatter {
  title: string;
  description: string;
  date: string;
  tags?: string[];
}

interface PostType extends Frontmatter {
  slug: string;
  readingTime?: string | number;
}

export default function BlogPage() {
  const articles: PostType[] = Object.entries(posts).map(([path, content]) => {
    const file = matter(content as string);
    const data = file.data as Frontmatter;
    const slug = path.split("/").pop()?.replace(".md", "") || "";

    return { ...data, slug, readingTime: getReadingTime(file.content) };
  });

  // newest first
  const sorted = articles.sort((a, b) => +new Date(b.date) - +new Date(a.date));

  const [featured, ...rest] = sorted;

  return (
    <div className="page blog">
      <header className="page-header blog-header">
        <MathBackdrop symbols pulse />

        <div className="page-header-content">
          <h1>Blog</h1>
          <p className="page-subtitle">
            Notes on mathematics, various science related subjects, and philosophy. My work here is mostly
            short and occasionally longer.
          </p>
        </div>
      </header>
      <section className="blog-topics">
        <h2>Topics</h2>
        <div className="topic-list">
          <span>Linear Algebra</span>
          <span>Calculus</span>
          <span>Analysis</span>
          <span>Learning & Pedagogy</span>
          <span>Writing</span>
          <span>Physics</span>
        </div>
      </section>
      {featured && (
        <section className="blog-featured">
          <DotBackdrop />

          <div className="featured-post">
            <span className="featured-label">Featured</span>
            <h2>{featured.title}</h2>
            <p>{featured.description}</p>
            <a href={`/blog/${featured.slug}`}>Read article →</a>
          </div>
        </section>
      )}
      <section className="blog-list">
        {rest.map((post: PostType) => (
          <a key={post.slug} href={`/blog/${post.slug}`} className="blog-item">
            <div className="blog-item-header">
              <h3>{post.title}</h3>
              <span className="blog-date">{post.date}</span>
            </div>
            <div className="blog-meta">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>

            <div className="tag-list">
              {post.tags?.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <p className="blog-description">{post.description}</p>

            <span className="read-more">Read →</span>
          </a>
        ))}
      </section>
    </div>
  );
}
