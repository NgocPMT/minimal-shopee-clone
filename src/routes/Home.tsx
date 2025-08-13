import Categories from "../components/Categories";
import heroBackground from "../assets/images/hero-background.jpg";
import Recommended from "../components/Recommended";
import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <section className="relative w-full  text-center">
        <img
          src={heroBackground}
          alt=""
          className="absolute object-cover w-full h-full -z-10"
        />
        <div className="absolute object-cover w-full h-full bg-black/10 -z-10"></div>
        <h1 className="text-amber-50 text-2xl pt-3 font-bold">Shopeefy</h1>
        <p className=" text-amber-100">Simplify your shopping experience.</p>
        <Link
          to="shop"
          className="bg-amber-700 text-amber-50 p-2 px-3 rounded-md text-sm hover:bg-amber-800 focus:bg-amber-800 inline-block mt-4 mb-5"
        >
          Shop Now
        </Link>
      </section>
      <Categories />
      <Recommended />
    </div>
  );
};

export default Home;
