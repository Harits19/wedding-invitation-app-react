"use client";

import { Button, NavLink, Text } from "@mantine/core";
import { ReactNode, useState } from "react";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import MantineProviderComponent from "../components/mantine-provider";

export default function Layout({ children }: { children: ReactNode }) {
 
  return <MantineProviderComponent>{children}</MantineProviderComponent>;
}
