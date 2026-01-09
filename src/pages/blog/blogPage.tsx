import matter from "gray-matter";
import { MathBackdrop, DotBackdrop } from "../../components/deco/mathBackdrop";
import { getReadingTime } from "../../components/blog/getReadingTime";
import { SearchBar } from "../../components/misc/searhBar";
import { useState, useEffect } from "react";

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

const BlogPost = ({post}:{post:any}) => {
  return (
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
        {post.tags?.map((tag: string) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <p className="blog-description">{post.description}</p>

      <span className="read-more">Read →</span>
    </a>
  );
};

const TagLst = ({ tags, sorted, setFilteredPosts, setFetchingFiltered, hasQuery, setHasFilteredTag }: any) => {
  const [tagStates, setTagStates] = useState<boolean[]>(
    () => tags.map(() => false)
  );

  const toggleTag = (index: number) => {
    setTagStates(prev =>
      prev.map((value, i) => (i === index ? !value : value))
    );
    setFetchingFiltered(true);
    setHasFilteredTag(!tagStates.some(Boolean));
  };

  useEffect(() => {
    if(!hasQuery){
      const timer = setInterval(() => {
      const activeTags = tags.filter((_:any, i:number) => tagStates[i]);

      if (activeTags.length === 0) {
        setFilteredPosts(sorted);
        setFetchingFiltered(false);
        return;
      }

      setFilteredPosts(
        sorted.filter((post:any) =>
          post.tags?.some((tag:string) =>
            activeTags.some((active:any) =>
              tag.toLowerCase().includes(active.toLowerCase())
            )
          )
        )
      );
      setFetchingFiltered(false);
    }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [tagStates]);

  return (
    <>
      {tags.map((tag:string, i:number) => {
        const anyActive = tagStates.some(Boolean);

        if (anyActive && !tagStates[i]) return null;

        return (
          <span key={tag}>
            <button onClick={() => toggleTag(i)}>
              {tag}
              {(anyActive && tagStates[i]) && <i className="far fa-x"></i>}
            </button>
          </span>
        );
      })}
    </>
  );
};

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

  const [filteredPosts, setFilteredPosts] = useState(sorted);
  const [fetchingFiltered, setFetchingFiltered] = useState(false); // Flag for checking if posts are being filtered
  const [hasQuery, setHasQuery] = useState(false); // Flag for checking if user has searched or is in the process of searching
  const [hasFilteredTag, setHasFilteredTag] = useState(false); // Flag for checking if user has clicked on a filtered tag

  const tagLst = ["Linear Algebra", "Calculus", "Analysis", "Learning & Pedagogy", "Writing", "Physics"];

  return (
    <div className="page blog">
      <header className="page-header blog-header">
        <MathBackdrop symbols pulse />

        <div className="page-header-content">
          <h1>Blog</h1>
          <p className="page-subtitle">
            Notes on mathematics, various science related subjects, and
            philosophy. My work here is mostly short and occasionally longer.
          </p>
        </div>
      </header>
      <section className="page-searchbar">
        <SearchBar
          posts={sorted}
          onResults={setFilteredPosts}
          placeholder="search posts..."
          setFetchingFiltered={setFetchingFiltered}
          setHasQuery={setHasQuery}
        />
      </section>
      <section className="blog-topics">
        {!hasQuery &&
        (
          <>
          <h2>Topics</h2>
        <div className="topic-list">
         <TagLst tags={tagLst} sorted={sorted} setFilteredPosts={setFilteredPosts} setFetchingFiltered={setFetchingFiltered} hasQuery={hasQuery} setHasFilteredTag={setHasFilteredTag}/>
        </div>
        </>
        )
        }
      </section>
      {(featured && !hasQuery && !hasFilteredTag) && (
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
        {fetchingFiltered ? <p>Loading...</p> : filteredPosts.map(((post: PostType, i:number) => <BlogPost key={i} post={post} />))}
      </section>
    </div>
  );
}
