import type { ReactElement, ReactNode, ReactSVGElement } from "react";

type EmptyAlertProps = {
  icon: ReactElement<ReactSVGElement>;
  title: string;
  children: ReactNode;
};

const EmptyAlert = ({ icon, title, children }: EmptyAlertProps) => {
  return (
    <div className="pt-15 px-4 sm:mx-auto flex flex-col items-center text-amber-700">
      {icon}
      <h1 className="font-bold text-xl lg:text-3xl ml-4 my-4">{title}</h1>
      <div className="ml-5 text-center text-black">{children}</div>
    </div>
  );
};

export default EmptyAlert;
