import React, { useState } from "react";
import { GetAge, GetCountry, GetGender } from "../api";
import Loader from "./Loader/Loader";
import { RxCrossCircled } from "react-icons/rx";
const Search = () => {
  const [name, setName] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [val, setVal] = useState({});
  const checkFunction = async (name) => {
    if (name.length <= 3) {
      alert("Enter more characters ");
      return;
    }
    let num = /\d+/;
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (format.test(name) && num.test(name)) {
      alert("Please remove special or numeric characters");
      return;
    }
    name = name.trim();
    let spaceCount = 0;
    for (let i = 0; i < name.length; i++) {
      if (name[i] === " ") spaceCount++;
    }
    if (spaceCount > 1) {
      alert("Please include only one space between name");
      return;
    }
    setisLoading(true);
    let age, country, gender;
    age = await GetAge(name);
    country = await GetCountry(name);
    gender = await GetGender(name);
    setVal({ age: age, country: country, gender: gender });
    setisLoading(false);
  };
  return isLoading ? (
    <Loader message="" />
  ) : (
    <div className="flex flex-col justify-center h-full">
      <div className="flex flex-row justify-center gap-3 items-center">
        <input
          className="border-2 border-solid border-grey-400 rounded-md p-1"
          value={name}
          placeholder="Enter name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button
          className=""
          onClick={() => {
            setName("");
            setVal({});
          }}
        >
          <RxCrossCircled />
        </button>

        <button
          className="ml-4 p-1 px-2  bg-zinc-200 rounded-md hover:bg-zinc-300 font-medium text-lg "
          onClick={() => {
            checkFunction(name);
          }}
        >
          Get Result
        </button>
      </div>
      {val?.age?.age && val?.gender?.gender && val?.country?.country && (
        <div className="flex flex-col justify-center items-center mt-3">
          <div className="grid grid-cols-4 gap-10">
            <div className="">
              <div className="font-semibold">Name</div>
              <div>{name}</div>
            </div>
            <div>
              <div className="font-semibold"> Age</div>
              <div>{val?.age?.age}</div>
            </div>
            <div>
              <div className="font-semibold"> Gender </div>
              <div>{val?.gender?.gender}</div>
            </div>
            <div>
              <div className="font-semibold">Country </div>
              <div>
                <div>1 : {val?.country?.country[0]?.country_id}</div>
                <div>2 : {val?.country?.country[1]?.country_id}</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4"></div>
        </div>
      )}
    </div>
  );
};

export default Search;
