"use client";
import { store } from "@/store/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

type RTK = {
  children: ReactNode;
};

export default function RTKProvider({ children }: RTK) {
  return <Provider store={store}>{children}</Provider>;
}
