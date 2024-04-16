"use client"
import { FormControl, FormHelperText, Input, InputLabel, TextField, useFormControl } from '@mui/material';
import React, { useState } from 'react';

const FormStatus = () => {
    const value = useFormControl();
    return (
        <ul>
            <li>focused: {value?.focused ? "focused" : "not focused"}</li>
            <li>error: {value?.error ? "error" : "not error"}</li>
        </ul>
    )
}

const Page = () => {
    const [email, setEmail] = useState(0);
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setEmail(event.target.value.length);
    }
    const isError = email > 10;
    return (
        <div className="flex min-h-screen flex-col p-24 bg-white text-black">
            <h1>Form</h1>
            <TextField label="Name" />
            <section className="mt-10 flex flex-col gap-y-4">
                <h2>Form Control</h2>
                <FormControl required error={isError}>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" onChange={handleChange}/>
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    <FormStatus/>
                </FormControl>
            </section>
        </div>
    );
}

export default Page;