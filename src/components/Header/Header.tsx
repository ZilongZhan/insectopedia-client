import "./Header.css";

const Header: React.FC = () => {
  return (
    <header>
      <h1 className="main-header__title">Insectopedia</h1>
      <img
        className="main-header__banner"
        src="/images/banner.png"
        alt="A monarch butterfly resting on a flower"
      />
    </header>
  );
};

export default Header;
