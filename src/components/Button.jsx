const Button = ({ mode, title }) => {
  return (
    <button className={mode === "dark" ? "btn btn-light" : "btn btn-dark"}>
      {title}
    </button>
  );
};

export default Button;
