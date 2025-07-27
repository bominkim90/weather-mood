interface ButtonProps {
  theme: 'DEFAULT' | 'POSITIVE' | 'NEGATIVE' | 'RED';
  title: string;
  type?: 'button' | 'submit' | 'reset';
  addClass?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  theme = 'DEFAULT',
  title,
  type = 'button',
  addClass,
  disabled = false,
  onClick,
}: ButtonProps) {
  const buttonTheme = {
    DEFAULT: 'bg-transparent  text-pink-primary border border-pink-primary',
    POSITIVE: 'bg-pink-primary text-white',
    NEGATIVE: 'bg-[#F3F4F6] text-[#4B5563]',
    RED: 'bg-pink-secondary text-red-primary border border-pink-border',
  }[theme];

  return (
    <button
      onClick={onClick}
      className={
        'rounded-[8px] text-sm flex items-center justify-center h-[45px] px-6' +
        ' ' +
        addClass +
        ' ' +
        buttonTheme
      }
      disabled={disabled}
      type={type}
    >
      {title}
    </button>
  );
}
