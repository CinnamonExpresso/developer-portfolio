// SearchBar.tsx
import React, { useEffect, useState } from "react"

interface BlogPost {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  slug: string;
}

interface SearchBarProps {
  posts: BlogPost[]
  onResults: (results: BlogPost[]) => void
  setFetchingFiltered: any
  setHasQuery: any
  placeholder?: string
  tag?: string
}

export const SearchBar: React.FC<SearchBarProps> = ({
  posts,
  onResults,
  placeholder = "Search posts...",
  setFetchingFiltered,
  setHasQuery
}) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    setFetchingFiltered(true);
    const timeout = setTimeout(() => {
      const lower = query.toLowerCase()

      const filtered = posts.filter(post =>
        post.title.toLowerCase().includes(lower) ||
        post.description.toLowerCase().includes(lower) ||
        post.date.includes(lower) ||
        post.tags?.some(tag => tag.toLowerCase().includes(lower))
      )
      setFetchingFiltered(false);
      onResults(filtered);
    }, 1000)

    setHasQuery(Boolean(query));

    return () => clearTimeout(timeout)

  }, [query, onResults])

  return (
    <div className="search-container">
      <span className="search-icon"><i className="far fa-search"></i></span>
      <input
        type="search"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder={placeholder}
        className="search-input"
      />
    </div>
  )
}
