const Label = ({ text }) => {
  return (
    <span
      id="label-gradient"
      className="py-2 px-4 text-xs sm:text-sm lg:text-base rounded-full"
    >
      {text}
    </span>
  );
};

export default Label;
