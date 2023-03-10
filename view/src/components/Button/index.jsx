import { Spinner } from "components";

export const Button = ({ children, loading, ...props }) => {
  return (
    <button
      {...props}
      type="submit"
      className="text-white flex items-center justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {loading ? <Spinner /> : null}
      {children}
    </button>
  );
};
