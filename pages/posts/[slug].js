import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostFile } from "../../lib/posts-utility";

function SingleDetailePage(props) {
  return <PostContent post ={props.post}/>;
}
export default SingleDetailePage;

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}
export function getStaticPaths() {
  const postFileName = getPostFile();
  const slugs = postFileName.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
