import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="flex justify-center">
        <Link to="/funsearch">
          <button className="p-9 bg-zinc-200 rounded-2xl hover:bg-zinc-300 font-semibold text-lg">
            Start Fun
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
