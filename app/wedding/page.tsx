"use client";

import Button from "../components/button";
import Input from "../components/input";
import { useState } from "react";
import ListWedding from "./components/list-wedding";

export default function Wedding() {
  const [apiKeyText, setApiKey] = useState("");
  const [apiKeySubmitted, setApiKeySubmitted] = useState(false);

  return (
    <div className="w-screen bg-slate-100 min-h-screen flex-1 flex flex-col justify-center p-10">
      <div className="bg-white rounded-2xl overflow-hidden flex flex-1 p-6 flex-col">
        <Button className="w-fit self-end">Add Wedding</Button>
        <div className="h-2" />
        <Input
          label="API KEY"
          placeholder="API KEY"
          onChangeText={setApiKey}
        />
        <div className="h-2" />
        <Button
          onClick={() => {
            setApiKeySubmitted((prev) => !prev);
          }}
        >
          {apiKeySubmitted ? "Remove Api Key" : "Submit Api Key"}
        </Button>
        <div className="h-2" />
        {apiKeySubmitted ? <ListWedding apiKey={apiKeyText} /> : undefined}
      </div>
    </div>
  );
}
