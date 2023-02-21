import React from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button, TextField } from "components";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const contactSchema = yup
  .object({
    name: yup.string().required("please enter a name"),
    number: yup.number().required("please enter a number"),
  })
  .required();

export function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(contactSchema), mode: "onBlur" });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await registerService(data);
      toast.success(res?.data?.message);
      setLoading(false);
      navigate("/login");
    } catch (ex) {
      toast.error(ex?.response?.data?.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!Cookies.get("loginToken")) {
      navigate("/login");
      toast.info("please login first!", {
        toastId: "info",
      });
    }
  }, [Cookies]);

  return (
    <div className="max-w-lg mx-auto my-6">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white py-3 text-center">
        Save your contacts here
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Contact name"
          htmlFor="name"
          type="text"
          id="name"
          validation={{ ...register("name") }}
          error={errors?.name?.message}
        />
        <TextField
          label="Number"
          htmlFor="number"
          type="number"
          id="number"
          validation={{ ...register("number") }}
          error={errors?.number?.message}
        />
        <Button loading={loading}>Save</Button>
      </form>
    </div>
  );
}
