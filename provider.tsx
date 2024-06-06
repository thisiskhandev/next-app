"use client";

import { Provider } from "react-redux";
import { ReactNode } from "react";
import { store } from "@/app/redux/store";

type Props = {
  children: ReactNode;
};

export default function ProviderWrapper({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}
