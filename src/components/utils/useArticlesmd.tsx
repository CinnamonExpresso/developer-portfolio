// src/utils/useArticles.ts
import fm from "front-matter";

const mdFiles = import.meta.glob(
  '/src/data/md/posts/*.{md,mdx}',
  { as: 'raw' }
);

export interface ArticleData {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: any;
  content: string;
}

export async function FetchMDFile(path: string): Promise<null | { data: any; body: string }> {
  const tryTypes = ['mdx', 'md'];
  for (const type of tryTypes) {
    const fullPath = `/src/data/md${path}.${type}`;
    const loader = mdFiles[fullPath];
    if (loader) {
      const rawContent = await loader();
      const parsed = fm(rawContent);
      return {
        data: parsed.attributes as any,
        body: parsed.body
      };
    }
  }
  return null;
}

export async function FetchMDFileFromKey(mdPath: string) {
  const loader = mdFiles[mdPath];
  if (loader) {
    const rawContent = await loader();
    const parsed = fm(rawContent);
    return {
      data: parsed.attributes,
      body: parsed.body
    };
  }
  return null;
}


export async function FetchMDGroup(folderPath: string) {
  const articles: { md: string; data: any }[] = [];
      for (const mdPath in mdFiles) {
        if (mdPath.startsWith(`/src/data/md${folderPath}`)) {
  const mdData = await FetchMDFileFromKey(mdPath);
  if (mdData) {
    articles.push({ md: mdPath, data: mdData });
  }
}
  }

  return articles;
}

export async function GetArticleBySlug(slug: string): Promise<ArticleData | null> {
  const blogData = await FetchMDFile(`/posts/${slug}`);
  if (!blogData) return null;

  return {
    slug,
    title: blogData.data.title ?? "Untitled",
    date: blogData.data.date ?? "Unknown date",
    description: blogData.description,
    tags: blogData.tags,
    content: blogData.body,
  };
}

//Only gives article titles and info to sort them
export async function FetchAllTitles(folderPath: string) {
  const results: { title: string; slug: string; date?: string }[] = [];

  for (const mdPath in mdFiles) {
    // Make sure it's inside /src/data/md/<folderPath>/
    if (!mdPath.startsWith(`/src/data/md${folderPath}`)) continue;

    // Load & parse front-matter
    const mdData = await FetchMDFileFromKey(mdPath);
    if (!mdData) continue;

    // Extract slug (filename without extension)
    const slug = mdPath.split("/").pop()!.replace(/\.(md|mdx)$/, "");

    results.push({
      slug,
      title: mdData?.data?.title ?? slug,
      date: mdData?.data?.date,
    });
  }

  return results;
}
