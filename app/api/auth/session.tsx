import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Session(props: Props) {
  return <SessionProvider>{props.children}</SessionProvider>;
}
