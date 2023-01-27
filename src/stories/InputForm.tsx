

interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement>{
}
export const InputForm = ({ ...props
}: InputFormProps) => {
  return (
    <input
      className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
      {...props}
    >
    </input>
  );
};
