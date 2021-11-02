import { Fragment } from "react";
import FeaturedPosts from "../components/Home-Page/feature-posts";
import Hero from "../components/Home-Page/hero";
import { getFeaturedPosts } from "../lib/posts-utility";

function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}
export default HomePage;

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60, 
  };
}
