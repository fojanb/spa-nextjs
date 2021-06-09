import { useRouter } from "next/router";
import Link from "next/link";
const card = ({ data }) => {
  // next/route Dynamic Route
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <>
      <h3>--Card Number {data.id}--</h3>
      <div>{data.title}</div>
      <p>{data.body}</p>

      <Link href="/">Go Back</Link>
    </>
  );
};

export default card;
// For dynamic routing between pages in SSG mode :
export const getStaticProps = async (context) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const data = await response.json();
  // getStaticProps will return an object as below :
  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();
  const ids = data.map((data) => data.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return { paths, fallback: false };
};


// Note that : When a file is added to the pages directory
// it's automatically available as a route.
// The router will automatically route files
// named **index** to the root of the directory.
// ---------------------------------------------------
// The Next.js router allows you to do client-side route transitions between pages,
// similar to a single-page application.
// A React component called Link is provided to do this client-side route transition.

// '/' → pages/index.js
// '/about' → pages/about.js
// '/blog/hello-world' → pages/blog/[slug].js
