"use client";

import { Dialog } from "../ui/dialog";
import { useTokenState } from "@/app/core/hooks/use-token";

export default function ModalToken() {
  const { token } = useTokenState();
  const tokenIsEmpty = !token;
  return <Dialog open={tokenIsEmpty}>Dialog token</Dialog>;
}
