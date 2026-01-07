import matter from 'gray-matter'

const posts = import.meta.glob('../../data/md/posts/*.md', {
  as: 'raw',
  eager: true,
});

interface Frontmatter {
  title: string;
  description: string;
  date: string;
}

interface PostType extends Frontmatter {
  slug: string;
}

export default function BlogPage() {
  const articles: PostType[] = Object.entries(posts).map(([path, content]) => {
    const file = matter(content as string);
    const data = file.data as Frontmatter; // cast here after parsing
    const slug = path.split('/').pop()?.replace('.md', '') || '';

    return { ...data, slug };
  });

  return (
    <div className="page">
      <header className="page-header">
        <h1>Blog</h1>
        <p className="page-subtitle">
          A collection of some of my writings. Short notes on mathematics, problem-solving, philosophy, and communicating various technical ideas.
        </p>
      </header>

      <section className="blog-list">
        {articles.map((post) => (
          <a key={post.slug} href={`/blog/${post.slug}`} className="blog-item">
            <h2>{post.title}</h2>
            <p className="blog-description">{post.description}</p>
            <span className="blog-date">{post.date}</span>
          </a>
        ))}
      </section>
    </div>
  );
}