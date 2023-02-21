import { Button, TextField } from "components";
import useRegister from "./useRegister";
import { Link } from "react-router-dom";

export function Register() {
  const { onRegister, handleSubmit, register, errors, loading } = useRegister();

  return (
    <div className="max-w-lg mx-auto my-6">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white py-3 text-center">
        Register
      </h1>
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
        <Button loading={loading}>Submit</Button>
      </form>
      <p class="text-gray-500 dark:text-gray-400 py-3">
        <Link
          to="/login"
          href="#"
          class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Login Instead
          <svg
            aria-hidden="true"
            class="w-5 h-5 ml-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
      </p>
    </div>
  );
}
