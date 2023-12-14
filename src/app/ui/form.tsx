"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Form() {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    try {
      const response = await fetch("http://localhost:3001/submit", {
        method: "POST",
        body: formData, 
      });
      const result = await response.json();
      router.push(`results/${result.jobId}`);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 max-w-md mx-auto"
    >
      <div>
        <label
          htmlFor="file"
          className="block text-sm font-medium text-gray-700"
        >
          Arquivo
        </label>
        <input
          type="file"
          name="file"
          id="file"
          className="mt-1  block w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>

      <div>
        <label
          htmlFor="model"
          className="block text-sm font-medium text-gray-700"
        >
          Modelo
        </label>
        <select
          id="model"
          name="model"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        >
          <option value="DSSP">DSSP</option>
          <option value="DeepSplicer">DeepSplicer</option>
          <option value="SpliceAI">SpliceAI</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>

      <button
        type="submit"
        className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700"
      >
        Executar
      </button>
    </form>
  );
}
