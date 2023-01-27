import './button.css';

interface ButtonProps {
 primary?: boolean;
backgroundColor?: string;
size?: 'small' | 'medium' | 'large';
label: string;
onClick?: () => void;
}
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'text-white bg-green-800' : 'text-green-800 bg-transparent shadow-md';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
