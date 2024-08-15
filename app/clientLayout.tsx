"use client"

import { useModeStore } from "./store";
import Header from "./ui/header";
import clsx from "clsx";

const ClientLayout = ({ children, }: Readonly<{ children: React.ReactNode }>) => {

  const nightMode = useModeStore((state) => state.nightMode);
  const setNightMode = useModeStore((state) => state.setNightMode);
  return (
      <div className={clsx("pb-20 h-[100%]",{
          'bg-[#212E37] text-white': nightMode,
          'bg-white text-[#212E37]': !nightMode
        })}>
        <Header nightMode={nightMode} setNightMode={setNightMode} />
        {children}
      </div>
  );
}

export default ClientLayout;
