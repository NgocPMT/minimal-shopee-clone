import type { SVGProps } from "react";
import { Link } from "react-router-dom";

type CategoryLinkProps = {
  to: string;
  icon: React.ReactElement<SVGProps<SVGElement>>;
  text: string;
};

const CategoryLink = ({ to, icon, text }: CategoryLinkProps) => {
  return (
    <Link to={to} className="flex flex-col items-center gap-1">
      <div className="ring ring-gray-300 rounded-sm p-2 w-fit text-amber-700">
        {icon}
      </div>
      <p className="text-xs">{text}</p>
    </Link>
  );
};

export default CategoryLink;
