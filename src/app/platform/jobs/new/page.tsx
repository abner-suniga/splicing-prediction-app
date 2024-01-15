"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

export default function NewJob() {
  const router = useRouter();
  const { getToken } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    try {
      const token = await getToken();
      const response = await fetch("http://localhost:3001/v1/jobs", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      router.push(`/platform/jobs/${result.jobId}`);
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
          className="mt-1  block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
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
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
        >
          <option value="AS_DSSP">AS DSSP</option>
          <option value="DS_DSSP">DS DSSP</option>
          <option value="DeepSplicer">DeepSplicer</option>
          <option value="SpliceAI">SpliceAI</option>
        </select>
      </div>

      <button
        type="submit"
        className="inline-block w-full rounded border border-emerald-600 bg-emerald-600 px-10 py-2 text-md font-medium text-white hover:bg-transparent hover:text-emerald-600 focus:outline-none focus:ring active:text-emerald-500"
      >
        Executar
      </button>
    </form>
  );
}
