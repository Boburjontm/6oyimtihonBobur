import React, { useState, useEffect } from "react";


const Payment = ({ closeModal }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="fixed bg-[#000000B2] w-full h-full top-0 left-0 flex justify-end ">
        <div
          className={`w-[405px] h-[728px] relative bg-[#1F1D2B] rounded-tr-[16px] rounded-br-[16px] pl-[24px] pr-[24px] py-[10px] payment-container ${
            isVisible ? "visible" : ""
          }`}
        >
          <h2 className="text-[28px] text-white font-semibold mb-[8px]">
            Payment
          </h2>
         
          <hr className="w-full my-[14px] border-[#393C49]" />
          <h2 className="text-[20px] text-white font-semibold mb-[16px]">
            Payment Method
          </h2>
         
          <p className="text-[14px] text-white mb-[8px] font-medium">
            Cardholder Name
          </p>
          <input
            type="text"
            placeholder="Enter Name"
            className="w-full h-[48px] rounded-[8px] bg-[#2D303E] pl-[14px] outline-none text-[#ABBBC2] border border-[#393C49]"
          />
          <p className="text-[14px] mt-[16px] text-white mb-[8px] font-medium">
            Card Number
          </p>
          <input
            type="text"
            placeholder="Card Number"
            className="w-full h-[48px] mb-[24px] rounded-[8px] bg-[#2D303E] pl-[14px] outline-none text-[#ABBBC2] border border-[#393C49]"
          />
          <div className="flex items-center gap-[13px]">
            <div>
              <p className="text-[white] text-[14px] mb-[8px]">
                Expiration Date
              </p>
              <input
                type="date"
                className="w-[172px] h-[48px] rounded-[8px] hover:cursor-pointer bg-[#2D303E] pl-[14px] outline-none text-[#ABBBC2] border border-[#393C49]"
              />
            </div>
            <div>
              <p className="text-[white] text-[14px] mb-[8px]">CVV</p>
              <input
                type="password"
                className="w-[172px] h-[48px] rounded-[8px] hover:cursor-pointer bg-[#2D303E] pl-[14px] outline-none text-[#ABBBC2] border border-[#393C49]"
              />
            </div>
          </div>
          <hr className="w-full my-[15px] border border-[#393C49]" />
          <div className="flex items-center gap-[13px]">
            <div>
              <p className="text-[white] text-[14px] mb-[8px]">Order Type</p>
              <select
                className="w-[172px] h-[48px] rounded-[8px] hover:cursor-pointer bg-[#2D303E] pl-[14px] outline-none text-[#ABBBC2] border border-[#393C49]"
                name="select"
                id="select"
              >
                <option
                  className="p-[50px] text-left h-[90px] text-white"
                  value="OPTION"
                >
                  Dine in
                </option>
                <option
                  className="p-[50px] text-left h-[90px] text-white"
                  value="OPTION"
                >
                  To Go
                </option>
                <option
                  className="p-[50px] text-left h-[90px] text-white"
                  value="OPTION"
                >
                  Delivery
                </option>
              </select>
            </div>
            <div>
              <p className="text-[white] text-[14px] mb-[8px]">Table no</p>
              <input
                type="text"
                placeholder="Enter Number"
                className="w-[172px] h-[48px] rounded-[8px] hover:cursor-pointer bg-[#2D303E] pl-[14px] outline-none text-[#ABBBC2] border border-[#393C49]"
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-[8px] absolute bottom-[20px]">
            <button
              onClick={closeModal}
              className="w-[175px] h-[48px] rounded-[8px] border border-[#EA7C69] text-[#EA7C69] text-[14px]"
            >
              Cancel
            </button>
            <button className="w-[175px] h-[48px] rounded-[8px] border bg-[#EA7C69] border-[#EA7C69] text-white text-[14px]  ">
              Confirm Payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
