'use client';
type buttonPropsType = {
  onClick: () => void;
  value?: number;
  children: React.ReactNode;
  className: string;
};
const Button = ({ onClick, children, className, value }: buttonPropsType) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
