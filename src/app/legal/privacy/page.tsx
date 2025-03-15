// app/privacy-policy/page.js (or .ts)

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import '@/app/styles/blog-globals.scss';

// Make this an async function to fetch data directly
const PrivacyPolicy = async () => {
  // File path for your markdown file
  const filePath = path.join(process.cwd(), "src/md/misc", "privacy-policy.md");
  
  // Read the content of the markdown file
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // Parse front matter and content from the markdown file
  const { content } = matter(fileContent);

  // Convert markdown content to HTML
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString().trim();  // Make sure it's a string

  // Render the HTML content inside the component
  return (
    <div className="blog-page-markdown">
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
};

export default PrivacyPolicy;
