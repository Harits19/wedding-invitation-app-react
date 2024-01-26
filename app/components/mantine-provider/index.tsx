import { MantineProvider, createTheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ReactNode } from "react";

const theme = createTheme({});

export default function MantineProviderComponent({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <MantineProvider theme={theme}>
      <Notifications position="top-right" />
      {children}
    </MantineProvider>
  );
}
