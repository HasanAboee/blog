import matter from "gray-matter";
import fs from "fs";
import path from "path";
const postsDirectory = path.join(process.cwd(), "posts");
export function getPostData(postID) {
  
  const postSlug = postID.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory,`${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
}
export function getPostFile(){
  return  fs.readdirSync(postsDirectory);
}
function GetAllPosts() {
  const postFiles = getPostFile()
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });
  const sortedPost = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPost;
}
export default GetAllPosts;

export function getFeaturedPosts() {
  const allPosts = GetAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
