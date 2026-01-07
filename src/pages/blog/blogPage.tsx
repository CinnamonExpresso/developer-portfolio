import matter from 'gray-matter'

const posts = import.meta.glob('../../data/md/posts/*.md', {
  as: 'raw',
  eager: true,
})

export default function BlogPage() {
  const articles = Object.entries(posts).map(([path, content]) => {
    const { data } = matter(content)
    const slug = path.split('/').pop().replace('.md', '')
      console.log(slug)

    return { ...data, slug }
  })
  return (
    <div className="page">
      <header className="page-header">
        <h1>Blog</h1>
        <p className="page-subtitle">
          Notes on mathematics, thinking, and clarity.
        </p>
      </header>

      <section className="blog-list">
        {articles.map(post => (
          <a key={post.slug} href={`/blog/${post.slug}`} className="blog-item">
            <h2>{post.title}</h2>
            <p className="blog-description">{post.description}</p>
            <span className="blog-date">{post.date}</span>
          </a>
        ))}
      </section>
    </div>
  )
}
