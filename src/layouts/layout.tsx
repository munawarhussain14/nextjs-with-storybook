import RTKProvider from "@/providers/rtk.provider";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RTKProvider>{children}</RTKProvider>;
}
