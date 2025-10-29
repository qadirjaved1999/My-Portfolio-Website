import { ReactNode } from "react";

export default function AdminGroupLayout({ children }: { children: ReactNode }) {
  // Later: server auth checks or middleware
  return <>{children}</>;
}
