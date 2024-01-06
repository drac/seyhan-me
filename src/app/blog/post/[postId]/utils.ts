import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/**
 * The directory path where the blog posts are stored.
 */
const postsDirectory = path.join(process.cwd(), 'posts');

/**
 * Retrieves the data of a blog post based on its ID.
 * @param id - The ID of the blog post.
 * @returns An object containing the ID, title, date, and content of the blog post.
 */
export function getPostData(id: string): {
  id: string;
  title: string;
  date: string;
  content: string;
} {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  return {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    content: matterResult.content,
  };
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [{ params: { id: 'my-first-post' } }, { params: { id: 'my-second-post' } }]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}
