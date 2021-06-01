import { useRouter } from "next/router";
import Link from "next/link";
const card = ({ data }) => {
  // next/route Dynamic Route
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <>
      <div>--Card Number --</div>
      <Link href="/">Go Back</Link>
    </>
  );
};

export default card;
// For dynamic routing between pages in SSG mode :

export const getStaticPaths = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts`
  );
  const data = await response.json();
  // getStaticProps will return an object as below :
  const paths = data.map((d) => ({ params: { id: toString(d.id) } }));
  return { paths , fallback : false };
};

export const getStaticProps = async ({params}) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await response.json();
  // getStaticProps will return an object as below :
  return {
    props: {
      data,
    },
  };
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
