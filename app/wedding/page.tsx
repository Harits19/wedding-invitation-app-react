"use client";

import { useState } from "react";
import ListWedding from "./components/list-wedding";
import { useRouter } from "next/navigation";
import { useGlobalState } from "../hooks/useGlobalState";
import {
  Box,
  Button,
  Input,
  LoadingOverlay,
  Notification,
} from "@mantine/core";
import { useQueryGetListWedding } from "./hooks/use-query-get-list-wedding";
import { notifications } from "@mantine/notifications";

export default function Wedding() {
  const { state, setState } = useGlobalState();
  const router = useRouter();
  const { data: listWedding = [], isLoading } = useQueryGetListWedding({
    onError: (value) => {
      notifications.show({
        color: "red",
        title: "Error!",
        message: JSON.stringify(value),
        autoClose: 3000,
      });
    },
  });

  return (
    <Box
      pos="relative"
      className="w-screen bg-slate-100 min-h-screen flex-1 flex flex-col justify-center p-10"
    >
      <LoadingOverlay
        visible={isLoading}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />

      <div className="bg-white rounded-2xl overflow-hidden flex flex-1 p-6 flex-col">
        <Button
          onClick={() => {
            router.push("/wedding/create");
          }}
        >
          Add Wedding
        </Button>
        <div className="h-2" />
        <Input
          value={state.apiKey}
          type="password"
          placeholder="API KEY"
          onChange={(val) => setState({ apiKey: val.target.value })}
        />
        <div className="h-2" />

        <div className="h-2" />
        <ListWedding list={listWedding} />
      </div>
    </Box>
  );
}
