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
import { AiOutlineDelete } from "react-icons/ai";
import Payment from "../src/assets/components/Payment.jsx";

const App = () => {
  const [data, setData] = useState([]);
  const [formattedDate, setFormattedDate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [orders, setOrders] = useState([]);
  const [activeItem, setActiveItem] = useState(1);
  const [activeItems, setActiveItems] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    fetch("https://663a97181ae792804befd66a.mockapi.io/Foods")
      .then((res) => res.json())
      .then((data) => setData(data));

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

  const filteredPizza = data.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToOrders = (food) => {
    const updatedOrders = [...orders, food];
    setOrders(updatedOrders);
  };

  const removeFromOrders = (foodId) => {
    setOrders(orders.filter((food) => food.id !== foodId));
  };

  const calculateTotalPrice = () => {
    return orders.reduce(
      (total, food) => total + food.price * food.quantity,
      0
    );
  };

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
            <ul className=" flex justify-left gap-12 mt-4 mx-8">
              <li
                className={`${
                  activeItem === 1
                    ? "text-[#EA7C69] text-[15px] font-sans font-semibold border-bottom border-b-2  hover:border-b-[#EA7C69] border-b-[#EA7C69] pb-4 transition duration-700"
                    : "text-[#fff] text-[15px] font-sans font-semibold hover:text-[#EA7C69] hover:border-b-2 hover:border-b-[#EA7C69] hover:pb-4 hover:transition duration-700  "
                }`}
                onClick={() => setActiveItem(1)}
              >
                Hot Dishes
              </li>
              <li
                className={`${
                  activeItem === 2
                    ? "text-[#EA7C69] text-[15px] font-sans font-semibold border-bottom border-b-2  hover:border-b-[#EA7C69] border-b-[#EA7C69] pb-4 transition duration-700"
                    : "text-[#fff] text-[15px] font-sans font-semibold hover:text-[#EA7C69] hover:border-b-2 hover:border-b-[#EA7C69] hover:pb-4 hover:transition duration-700  "
                }`}
                onClick={() => setActiveItem(2)}
              >
                Cold Dishes
              </li>
              <li
                className={`${
                  activeItem === 3
                    ? "text-[#EA7C69] text-[15px] font-sans font-semibold border-bottom border-b-2  hover:border-b-[#EA7C69] border-b-[#EA7C69] pb-4 transition duration-700"
                    : "text-[#fff] text-[15px] font-sans font-semibold hover:text-[#EA7C69] hover:border-b-2 hover:border-b-[#EA7C69] hover:pb-4 hover:transition duration-700  "
                }`}
                onClick={() => setActiveItem(3)}
              >
                Soup
              </li>
              <li
                className={`${
                  activeItem === 4
                    ? "text-[#EA7C69] text-[15px] font-sans font-semibold border-bottom border-b-2  hover:border-b-[#EA7C69] border-b-[#EA7C69] pb-4 transition duration-700"
                    : "text-[#fff] text-[15px] font-sans font-semibold hover:text-[#EA7C69] hover:border-b-2 hover:border-b-[#EA7C69] hover:pb-4 hover:transition duration-700  "
                }`}
                onClick={() => setActiveItem(4)}
              >
                Grill
              </li>
              <li
                className={`${
                  activeItem === 5
                    ? "text-[#EA7C69] text-[15px] font-sans font-semibold border-bottom border-b-2  hover:border-b-[#EA7C69] border-b-[#EA7C69] pb-4 transition duration-700"
                    : "text-[#fff] text-[15px] font-sans font-semibold hover:text-[#EA7C69] hover:border-b-2 hover:border-b-[#EA7C69] hover:pb-4 hover:transition duration-700  "
                }`}
                onClick={() => setActiveItem(5)}
              >
                Appetizer
              </li>
              <li
                className={`${
                  activeItem === 6
                    ? "text-[#EA7C69] text-[15px] font-sans font-semibold border-bottom border-b-2  hover:border-b-[#EA7C69] border-b-[#EA7C69] pb-4 transition duration-700"
                    : "text-[#fff] text-[15px] font-sans font-semibold hover:text-[#EA7C69] hover:border-b-2 hover:border-b-[#EA7C69] hover:pb-4 hover:transition duration-700  "
                }`}
                onClick={() => setActiveItem(6)}
              >
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
            <option
              className={`${
                activeItems === 1 ? "text-[#EA7C69] " : "text-[#fff]"
              }`}
              value=""
              onClick={() => setActiveItems(1)}
            >
              Dine In
            </option>
            <option
              className={`${
                activeItems === 2 ? "text-[#EA7C69] " : "text-[#fff]"
              }`}
              value=""
              onClick={() => setActiveItems(2)}
            >
              To Go
            </option>
            <option
              className={`${
                activeItems === 3 ? "text-[#EA7C69] " : "text-[#fff]"
              }`}
              value=""
              onClick={() => setActiveItems(3)}
            >
              Delivery
            </option>
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
              <button
                className="addorder hover:bg-[#EA7C69] text-white px-4 py-2 rounded"
                onClick={() => addToOrders(food)}
              >
                Add to food
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="sectionright bg-[#1F1D2B] w-[25%] mt-[-24px] ">
        <div className="fixed  m-auto mt-[25px] bg-[#1F1D2B]  w-[25%] px-4">
          <div>
            <p className="font-semibold font-sans text-[22px] text-[#fff]">
              Orders #34562{" "}
            </p>
          </div>
          <div className="flex gap-[8px] mt-[25px]">
            <ul className=" flex items-center gap-[8px]">
              <li
                className={`${
                  activeItems === 1
                    ? "flex items-center justify-center w-[80px] h-[43px] text-white text-[14px] font-sans font-semibold rounded-[8px] bg-[#EA7C69]"
                    : "flex items-center justify-center w-[80px] h-[43px] text-[#ABBBC2] text-[14px] font-sans font-semibold rounded-[8px] border border-[#ABBBC2]"
                }`}
                onClick={() => setActiveItems(1)}
              >
                Dine In
              </li>
              <li
                className={`${
                  activeItems === 2
                    ? "flex items-center justify-center w-[80px] h-[43px] text-white text-[14px] font-sans font-semibold rounded-[8px] bg-[#EA7C69]"
                    : "flex items-center justify-center w-[80px] h-[43px] text-[#ABBBC2] text-[14px] font-sans font-semibold rounded-[8px] border border-[#ABBBC2]"
                }`}
                onClick={() => setActiveItems(2)}
              >
                To Go
              </li>
              <li
                className={`${
                  activeItems === 3
                    ? "flex items-center justify-center w-[80px] h-[43px] text-white text-[14px] font-sans font-semibold rounded-[8px] bg-[#EA7C69]"
                    : "flex items-center justify-center w-[80px] h-[43px] text-[#ABBBC2] text-[14px] font-sans font-semibold rounded-[8px] border border-[#ABBBC2]"
                }`}
                onClick={() => setActiveItems(3)}
              >
                Delivery
              </li>
            </ul>
          </div>
          <div className="flex justify-between text-[18px] text-[#fff] font-semibold font-sans mt-[25px] mx-2">
            <p>Item</p>
            <div className="flex gap-[50px]">
              <p>Qty</p>
              <p>Price</p>
            </div>
          </div>
          <hr className="mt-[25px]" />
        </div>
        <div className="w-[360px] h-[53%] border-none m-auto overflow-scroll mt-56">
          {data.map((food, index) => (
            <div className="w-[100%] h-[125px] mt-5">
              <div>
                <div className="flex items-center">
                  <div className="flex items-center w-[235px]">
                    <img
                      src={food.img}
                      alt="img"
                      className="w-[45px] h-[45px] rounded-[50%]"
                    />
                    <div className="ml-2">
                      <h3 className="text-[14px] text-[#fff] font-sans font-medium">
                        {food.name}
                      </h3>
                      <p className="text-[13px] text-[#ABBBC2] font-sans font-medium">
                        {food.price}
                      </p>
                    </div>
                  </div>
                  <div className="w-[120px] flex items-center justify-between ">
                    <button className="flex justify-center items-center w-[50px] h-[50px] border border-[#393C49] bg-[#393C49] rounded-lg text-[16px] text-[#fff]">
                      2
                    </button>
                    <h3 className="text-[16px] text-[#fff] font-sans font-medium">
                      {food.price}
                    </h3>
                  </div>
                </div>
                <div className="flex justify-between mt-[8px]">
                  <input
                    type="text"
                    placeholder="Order Note..."
                    className="w-[285px] h-[50px] rounded-lg bg-[#393C49] outline-none p-[15px] text-[#E0E6E9]"
                  />
                  <button className="flex justify-center items-center w-[50px] h-[50px] border border-[#EA7C69] rounded-lg">
                    <AiOutlineDelete className="w-[25px] h-[23px] text-[#EA7C69]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[360px] ml-auto mr-auto">
          <hr />
          <div className="flex justify-between mt-[25px]">
            <p className=" font-normal text-[15px] text-[#ABBBC2]">Discount</p>
            <p className=" font-medium text-[16px] text-[#fff]">$0</p>
          </div>
          <div className="flex justify-between mt-[18px]">
            <p className=" font-normal text-[15px] text-[#ABBBC2]">Sub total</p>
            <p className="font-medium text-[16px] text-[#fff]"> $ 320</p>
          </div>
          <div className="flex mt-[45px]">
            <button
              onClick={openModal}
              className="w-[360px] h-[55px] bg-[#EA7C69] rounded-lg text-[15px] text-[#fff] font-semibold"
            >
              Continue to Payment
            </button>
          </div>
          <div></div>
        </div>
      </div>
      {modalIsOpen && <Payment closeModal={closeModal} />}
    </div>
  );
};

export default App;
