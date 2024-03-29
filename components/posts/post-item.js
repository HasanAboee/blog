import Link from "next/link";
import Image from 'next/image'
import styles from "./post-item.module.css";
function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;
  const formatdate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/image/site/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`
  return (
    <li className={styles.post}>
      <Link href={linkPath}>
        <a>
          <div className={styles.image}>
            <Image src={imagePath} alt={title} width={300} height={200} layout='responsive'/>
          </div>
          <div className={styles.content}>
            <h3>{title}</h3>
            <time>{formatdate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}
export default PostItem;
