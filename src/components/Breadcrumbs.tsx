import { useLocation, Link } from "react-router";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  let breadcrumbPath = "";

  return (
    <div className="m-4">
      <Link to="/">
        <span className="underline text-amber-700">Home</span>{" "}
      </Link>
      {pathnames.map((path, index) => {
        breadcrumbPath += `/${path}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <span> / {path}</span>
        ) : (
          <Link to={breadcrumbPath}>
            /{" "}
            <span className="underline text-amber-700 capitalize">{path}</span>{" "}
          </Link>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
