import headerStyles from "../styles/Header.module.css";
const Header = () => {
  return (
    <div className={headerStyles.title}>
      <h1>
        <span>WebDev</span> News
      </h1>
      <p>Keep up to date with Dev news</p>
    </div>
  );
};
export default Header;
