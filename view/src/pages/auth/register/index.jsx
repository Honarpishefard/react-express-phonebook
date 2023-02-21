import { Button, TextField } from "components";
import useRegister from "./useRegister";

export function Register() {
  const { onRegister, handleSubmit, register, errors, loading } = useRegister();

  return (
    <div className="max-w-lg mx-auto my-6">
      <form onSubmit={handleSubmit(onRegister)}>
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
        <TextField
          label="Repeat your password"
          htmlFor="repeatPassword"
          type="password"
          id="repeatPassword"
          validation={{ ...register("repeatPassword") }}
          error={errors?.repeatPassword?.message}
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
    </div>
  );
}
