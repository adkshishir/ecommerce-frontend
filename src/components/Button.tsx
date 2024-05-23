'use client';
type buttonPropsType = {
  onClick: () => void;
  children: React.ReactNode;
  className: string;
};
const Button = ({ onClick, children, className }: buttonPropsType) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
