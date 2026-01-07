import { useParams } from 'react-router-dom'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

const posts = import.meta.glob('../../data/md/posts/*.md', {
  as: 'raw',
  eager: true,
})

export default function Post() {
  const { post } = useParams()
  const file = Object.entries(posts).find(([path]) =>
    path.includes(String(post))
  )

  if (!file) {
    return <p style={{ padding: '6rem 3rem' }}>Post not found.</p>
  }

  const [, content] = file
  const { data, content: markdown } = matter(content)

  return (
    <article className="page blog-post">
      <header className="post-header">
        <h1>{data.title}</h1>
        <span className="post-date">{data.date}</span>
      </header>

      <div className="post-content">
        <ReactMarkdown>
          {markdown}
        </ReactMarkdown>
      </div>
    </article>
  )
}
