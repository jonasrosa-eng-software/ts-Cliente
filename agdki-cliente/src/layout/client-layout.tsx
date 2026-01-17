import type { ReactNode } from "react";

interface IClienteLayoutProps {
  children: ReactNode;
}

const ClienteLayout = (props: IClienteLayoutProps) => {
  const { children } = props;
  return (
    <div className="h-screen w-screen flex justify-center items-center p-2 ">
      {children}
    </div>
  );
};

export { ClienteLayout };
