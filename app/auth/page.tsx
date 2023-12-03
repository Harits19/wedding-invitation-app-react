"use client";

import Input from "../components/input";

export default function Auth() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-50">
      <div className="p-4 bg-white rounded-2xl h-1/3 w-1/3 flex flex-col">
        <h1>Auth Page</h1>
        <div className="flex-1" />
        <Input placeholder="Wedding Name" />
        <div className="h-2" />
        <Input placeholder="Password" />
        <div className="flex-1" />
        <button className="bg-blue-500 text-white p-2 rounded-lg" onClick={() => {}}>
          Login
        </button>
      </div>
    </div>
  );
}
