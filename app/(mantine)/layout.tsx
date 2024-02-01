"use client";

import { ReactNode } from "react";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import MantineProviderComponent from "../components/mantine-provider";

export default function Layout({ children }: { children: ReactNode }) {
  return <MantineProviderComponent>{children}</MantineProviderComponent>;
}
