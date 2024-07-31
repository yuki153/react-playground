"use client";
import { MultipleSelectChip } from "@/features/form/multiple-select-chip";
import { FormControl, FormHelperText, Input, InputLabel, TextField, useFormControl } from "@mui/material";
import type React from "react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const FormStatus = () => {
  const value = useFormControl();
  return (
    <ul className="text-xs">
      <li>focused: {value?.focused ? "focused" : "not focused"}</li>
      <li>error: {value?.error ? "error" : "not error"}</li>
    </ul>
  );
};

const Page = () => {
  const [email, setEmail] = useState(0);
  const { control, watch } = useForm({
    mode: "all", // reuqired for formState.errors
    defaultValues: {
      email: "",
    },
  });
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value.length);
  };
  const isError = email > 10;

  return (
    <div className="flex min-h-screen flex-col p-24 bg-white text-black">
      <h1>Form</h1>
      <TextField label="Name" />
      <div className="mt-10 flex flex-col gap-y-4">
        <section className="w-full flex flex-col gap-y-2">
          <h2>Form Control:1</h2>
          <FormControl required error={isError} fullWidth>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" onChange={handleChange} />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            <FormStatus />
          </FormControl>
        </section>
        <section className="w-full flex flex-col gap-y-2">
          <h2>Form Control:2</h2>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "This is required",
              maxLength: {
                value: 10,
                message: "Max length is 10",
              },
              minLength: {
                value: 5,
                message: "Min length is 5",
              },
            }}
            render={({ field, fieldState, formState }) => {
              console.log("formState:", formState.errors.email);
              console.log("fieldState:", fieldState.error);
              return (
                <FormControl fullWidth error={!!fieldState.error?.message}>
                  <InputLabel htmlFor="my-input2">Email address</InputLabel>
                  <Input {...field} id="my-input2" aria-describedby="my-helper-text2" />
                  <FormHelperText id="my-helper-text2">We'll never share your email.</FormHelperText>
                </FormControl>
              );
            }}
          />
        </section>
        {/* <section className='w-full flex flex-col gap-y-2'>
                    <h2>Form Control:2</h2>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="my-input2">Email address</InputLabel>
                        <Input {...register("email", { required: true, maxLength: { value: 10, message: "10" }})} id="my-input2" aria-describedby="my-helper-text2"/>
                        <FormHelperText id="my-helper-text2">We'll never share your email.</FormHelperText>
                    </FormControl>
                </section> */}
        <section className="w-full flex flex-col gap-y-2">
          <h2>Form Control:3</h2>
          <MultipleSelectChip />
        </section>
      </div>
    </div>
  );
};

export default Page;
