import Layout from "../components/layout";
import { getFrontPageContent } from "../lib/api";
import { GetStaticProps } from "next";
import styles from "./WordpressText.module.css";

interface Props {
  content: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
}

export default function Index({ content, featuredImage }: Props) {
  return (
    <Layout>
      <div className={`${styles.content}`}>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getFrontPageContent();
  return {
    props: {
      content: data.content,
      featuredImage: data.featuredImage,
    },
    revalidate: 10,
  };
};
