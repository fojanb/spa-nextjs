import navStyles from "../styles/Nav.module.css";
import Link from "next/link";
const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul className={navStyles.ul}>
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/">Samples</Link>
      </ul>
    </nav>
  );
};
export default Nav;
