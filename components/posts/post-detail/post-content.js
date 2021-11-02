import styles from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import Image from "next/image";
import { Prism as SuntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
function PostContent(props) {
  const { post } = props;
  const ImagePath = `/image/site/posts/${post.slug}/${post.image}`;
  const customRenderers = {
    //     image(image) {
    //       return (

    //       );
    //     },
    paragraph(paragraph) {
      const { node } = paragraph;
      if (node.children[0].type === "image") {
        const image = node.children[0];
        return (
          <div className={styles.image}>
            <Image
              src={`/image/site/posts/${post.slug}/${image.url}`}
              alt={image.alt}
              height={300}
              width={600}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    // code(code) {
    //   const { language, value } = code;
    //   return (
    //     <SyntaxHighlighter
    //       language={language}
    //       children={value}
    //       style={atomDark}
    //     />
    //   );
    // },
  };

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={ImagePath} />
      <ReactMarkdown renderers={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}
export default PostContent;
