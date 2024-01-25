"use client";

import { Button, NavLink, Text } from "@mantine/core";
import { ReactNode, useState } from "react";
import MantineProviderComponent from "../components/mantine-provider";
import "@mantine/core/styles.css";
import '@mantine/notifications/styles.css';

export default function Layout({ children }: { children: ReactNode }) {
  const [activeMenu, setActiveMenu] = useState(0);
  const menus = ["Wedding"];
  return (
    <MantineProviderComponent>
      <div className="flex flex-row">
        <div className="w-1/4 p-4">
          <Text>Dashboard</Text>
          <div className="h-8" />
          {menus.map((menu, index) => (
            <NavLink
              href="#required-for-focus"
              key={index}
              active={index === activeMenu}
              label={menu}
              onClick={() => setActiveMenu(index)}
            />
          ))}
        </div>
        {children}
      </div>
    </MantineProviderComponent>
  );
}
