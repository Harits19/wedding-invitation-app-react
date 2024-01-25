import { Button } from "@mantine/core";
import { ReactNode } from "react";
import MantineProviderComponent from "../components/mantine-provider";
import "@mantine/core/styles.css";

export default function Layout({ children }: { children: ReactNode }) {
  return <MantineProviderComponent>{children}</MantineProviderComponent>;
}
