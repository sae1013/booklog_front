import { ReactElement } from "react";

interface CtaButtonProps {
  styles?: string;
  children: ReactElement;
  onClick: () => void;
}
const CtaButton = ({ styles, onClick, children }: CtaButtonProps) => {
  return (
    <button
      type="button"
      className={`text-white bg-gray-900 hover:bg-red-500 hover:text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 me-2 dark:border-gray-700 ${styles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default CtaButton;
