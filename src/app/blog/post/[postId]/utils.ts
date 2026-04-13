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

  const matterResult = matter(fileContents);

  return {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    content: matterResult.content,
  };
}

export function getAllPosts(): {
  id: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
}[] {
  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.md'));

  const posts = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      tags: matterResult.data.tags ?? [],
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}
