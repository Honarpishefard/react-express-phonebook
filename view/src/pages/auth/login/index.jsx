import { Button, LinkComp, TextField } from "components";
import useLogin from "./useLogin";

export const Login = () => {
  const { onLogin, handleSubmit, register, errors, loading } = useLogin();

  return (
    <div className="max-w-lg mx-auto my-6">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white py-3 text-center">
        Login
      </h1>
      <form onSubmit={handleSubmit(onLogin)}>
        <TextField
          label="Your email"
          htmlFor="email"
          type="email"
          id="email"
          placeholder="example@email.com"
          validation={{ ...register("email") }}
          error={errors?.email?.message}
        />
        <TextField
          label="Your password"
          htmlFor="password"
          type="password"
          id="password"
          validation={{ ...register("password") }}
          error={errors?.password?.message}
        />
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <Button loading={loading}>Submit</Button>
      </form>
      <LinkComp value='Register Instead' to='/register'/>
    </div>
  );
};
