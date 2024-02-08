"use client";

import { create } from "@/src/redux/dashboardSlice";
import { useAppDispatch, useAppSelector } from "@/src/redux/store";
import { createAction } from "@reduxjs/toolkit";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  productName: string;
  color: string;
  category: string;
  price:number
}

const Create = () => {
  const router = useRouter();
  const dashboardState = useAppSelector((state) => state.dashboard);
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(create(data));
    router.push('/dashboard');
  };

  return (
    <section className="h-full w-full flex justify-center align-middle mt-20">
      <form class="max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="productName"
            id="productName"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required
            {...register("productName", { required: true, maxLength: 20 })}
          />
          <label
            for="productName"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product Name
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="color"
            id="color"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            {...register("color", { pattern: /^[A-Za-z]+$/i })}
          />
          <label
            for="color"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Color
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="Category"
            id="category"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            {...register("category", { min: 18, max: 99 })}
          />
          <label
            for="category"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
           Category
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="price"
            id="price"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            {...register("price", { min: 18, max: 99 })}
          />
          <label
            for="price"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
           Price
          </label>
        </div>
        
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Create;
