const Button = (props) => {
  return (
    <button
      className="flex items-center justify-center px-12 py-4 main-gradient-background rounded-xl text-white font-ElMessiri"
      type={props.type}
      onClick={props.Func}
    >
      {props.text}
    </button>
  );
};

export default Button;
