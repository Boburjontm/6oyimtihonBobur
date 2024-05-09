import React, { useState, useEffect } from "react";
import markett from "../public/img/markett.svg";
import homeimg from "../public/img/homeimg.svg";
import discount from "../public/img/discount.svg";
import uklon from "../public/img/uklon.svg";
import massage from "../public/img/massage.svg";
import ring from "../public/img/ring.svg";
import settings from "../public/img/settings.svg";
import quit from "../public/img/quit.svg";
import Search from "../public/img/search.svg";

const App = () => {
  const [pizza, setPizza] = useState([]);
  const [formattedDate, setFormattedDate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://663a97181ae792804befd66a.mockapi.io/Foods")
      .then((res) => res.json())
      .then((data) => setPizza(data));

    const today = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = today.toLocaleDateString("en-US", options);
    setFormattedDate(formattedDate);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPizza = pizza.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex">
      <div className="fixed z-10 sidebar flex flex-col items-center justify-between py-2 bg-[#1F1D2B] gap-4 w-[5%] h-screen rounded-l-lg">
        <img
          src={markett}
          alt="photo"
          className="w-12 h-12 p-2 hover:bg-[#EA7C69] rounded"
        />
        <img
          src={homeimg}
          alt="photo"
          className=" w-12 h-12 p-2 hover:bg-[#EA7C69] rounded"
        />
        <img
          src={discount}
          alt="photo"
          className="w-12 h-12 p-2 hover:bg-[#EA7C69] rounded"
        />
        <img
          src={uklon}
          alt="photo"
          className="w-12 h-12 p-2 hover:bg-[#EA7C69] rounded"
        />
        <img
          src={massage}
          alt="photo"
          className="w-12 h-12 p-2 hover:bg-[#EA7C69] rounded"
        />
        <img
          src={ring}
          alt="photo"
          className="w-12 h-12 p-2 hover:bg-[#EA7C69] rounded"
        />
        <img
          src={settings}
          alt="photo"
          className="w-12 h-12 p-2 hover:bg-[#EA7C69] rounded"
        />
        <img
          src={quit}
          alt="photo"
          className="w-12 h-12 p-2 hover:bg-[#EA7C69] rounded"
        />
      </div>
      <div className="Middle bg-[#252836] w-[70%] ml-16 ">
        <div className="z-10 bg-[#252836] mx-3">
          <div className="fixed   flex items-center justify-between z-10 bg-[#252836] w-[69.2%] gap-80 py-4">
            <div className="datakun mx-8">
              <h1 className="text-white text-lg font-semibold">
                Bobur Bahodirov
              </h1>
              <p className="text-white text-sm font-semibold">
                {formattedDate}
              </p>
            </div>
            <div className="search flex mr-4">
              <label
                htmlFor="search"
                className="bg-[#252836] text-white rounded-md p-2 flex border border-[#393C49]"
              >
                <img src={Search} alt="" />
                <input
                  type="text"
                  placeholder="Qidiruv..."
                  className="bg-[#252836] text-white rounded-md p-2 bg-transparent outline-none"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </label>
            </div>
          </div>
          <div className="fixed mt-20 navbar  bg-[#252836] w-[69.2%] border-b border-[#393C49] z-20">
            <ul className="flex justify-left gap-12 mt-4 mx-8">
              <li className="text-white cursor-pointer hover:text-[#EA7C69] hover:border-b-2 hover:border-b-[#EA7C69] pb-4 transition-">
                Hot Dishes
              </li>
              <li className="text-white cursor-pointer hover:text-[#EA7C69] hover:border-b-2 hover:border-b-[#EA7C69] pb-4 transition-">
                Cold Dishes
              </li>
              <li className="text-white cursor-pointer hover:text-[#EA7C69] hover:border-b-2 hover:border-b-[#EA7C69] pb-4 transition-">
                Soup
              </li>
              <li className="text-white cursor-pointer hover:text-[#EA7C69] hover:border-b-2 hover:border-b-[#EA7C69] pb-4 transition-">
                Grill
              </li>
              <li className="text-white cursor-pointer hover:text-[#EA7C69] hover:border-b-2 hover:border-b-[#EA7C69] pb-4 transition-">
                Appetizer
              </li>
              <li className="text-white cursor-pointer hover:text-[#EA7C69] hover:border-b-2 hover:border-b-[#EA7C69] pb-4 transition-">
                Dessert
              </li>
            </ul>
          </div>
        </div>
        <div className="fixed mt-32 flex items-center w-[69.2%] justify-between  z-10 bg-[#252836] py-5  mx-3">
          <h2 className=" mx-8 font-barlow text-2xl font-semibold leading-7 text-left text-white">
            Choose Dishes
          </h2>
          <select
            name=""
            id=""
            className="w-[15%] h-[36%] bg-[#1F1D2B] rounded-lg text-white mr-4"
          >
            <option value="">Dine In</option>
            <option value="">To Go</option>
            <option value="">Delivery</option>
          </select>
        </div>

        <div className="pizzas mt-60   grid grid-cols-3 mx-4 gap-14 ">
          {filteredPizza.map((food) => (
            <div
              className="foodse flex flex-col gap-4  items-center bg-[#1F1D2B] rounded-3xl py-5 hover:w-[101%] hover:transition-all duration-100 cursor-pointer"
              key={food.id}
            >
              <img
                src={food.img}
                alt=""
                className="w-[70%] h-auto rounded-[100%] mt-[-60px]"
              />
              <h1 className="text-center text-white mt-4">{food.name}</h1>
              <h2 className="text-center text-white">
                {food.available} Bowls available
              </h2>
              <h3 className="text-center text-white">{food.price}$</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        
      </div>
    </div>
  );
};

export default App;
    