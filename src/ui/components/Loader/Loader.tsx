import "./Loader.css";

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <img
        src="/images/loader.webp"
        alt="A dung beetle rolling a ball of dung"
      />
      <span className="loader__text">Loading...</span>
    </div>
  );
};

export default Loader;
