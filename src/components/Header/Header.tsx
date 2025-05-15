import "./Header.css";

const Header: React.FC = () => {
  return (
    <header>
      <h1 className="main-header__title">Insectopedia</h1>
      <img
        aria-hidden={true}
        className="main-header__banner"
        src="/images/banner.webp"
        alt=""
        height={700}
        width={466}
      />
    </header>
  );
};

export default Header;
