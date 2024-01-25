import { MantineProvider, createTheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ReactNode } from "react";

export default function MantineProviderComponent({
  children,
}: {
  children: ReactNode;
}) {
  const theme = createTheme({});
  return (
    <MantineProvider theme={theme}>
      <Notifications position="top-right" />
      {children}
    </MantineProvider>
  );
}
