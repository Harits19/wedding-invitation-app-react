"use client";

import Button from "../components/button";
import Input from "../components/input";
import { useState } from "react";
import ListWedding from "./components/list-wedding";
import { useRouter } from "next/navigation";
import { useGlobalState } from "../hooks/useGlobalState";

export default function Wedding() {
  const { state, setState } = useGlobalState();
  const router = useRouter();

  return (
    <div className="w-screen bg-slate-100 min-h-screen flex-1 flex flex-col justify-center p-10">
      <div className="bg-white rounded-2xl overflow-hidden flex flex-1 p-6 flex-col">
        <Button
          className="w-fit self-end"
          onClick={() => {
            router.push("/wedding/create");
          }}
        >
          Add Wedding
        </Button>
        <div className="h-2" />
        <Input
          value={state.apiKey}
          label="API KEY"
          type="password"
          placeholder="API KEY" 
          onChangeText={(val) => setState({ apiKey: val })}
        />
        <div className="h-2" />

        <div className="h-2" />
        <ListWedding />
      </div>
    </div>
  );
}
