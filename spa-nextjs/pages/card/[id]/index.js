import { useRouter } from "next/router";
import Link from "next/link";
// next/route Dynamic Route
const card = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <div>--Card Number {id}--</div>
      <Link href="/">Go Back</Link>
    </>
  );
};

export default card;



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
