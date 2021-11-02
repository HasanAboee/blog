import AllPosts from "../../components/posts/all-posts";
import GetAllPosts from "../../lib/posts-utility";
function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />;
}
export default AllPostsPage;
export async function getStaticProps() {
  const allPosts = GetAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}
