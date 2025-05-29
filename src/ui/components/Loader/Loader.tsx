import "./Loader.css";

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <img
        src="/images/loader.webp"
        alt="A dung beetle rolling a ball of dung"
        width={294}
        height={220}
      />
      <span className="loader__text">Loading...</span>
    </div>
  );
};

export default Loader;
