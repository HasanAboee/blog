import PostItem from "./post-item";
import styles from "./post-grid.module.css";
function PostGrid(props) {
  const { posts } = props;
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem post={post} key={post.slug} />
      ))}
    </ul>
  );
}
export default PostGrid;
