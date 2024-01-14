import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Section2 = () => {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Smith");
  const [email, setEmail] = useState("johnsmith@gmail.com");
  const [country, setCountry] = useState("USA");
  const [province, setProvince] = useState("California");
  const [city, setCity] = useState("Los Angeles");
  const [street, setStreet] = useState("Alameda Street");
  const [phoneNumber, setphoneNumber] = useState("+1 234 567");

  return (
    <div className="m-[50px] Poppins">
      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Orders</Tab>
        </TabList>

        <TabPanel>
          <div className="flex mt-[50px] md:flex-row flex-col">
            {/* left */}
            <div className="md:border-r-[1px] border-solid border-gray-400 pr-[25px]">
              <div className="flex flex-col items-center gap-[10px]">
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="profilePic"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <span className="text-red-500 cursor-pointer hover:text-red-600">
                    Sign out
                  </span>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="m-[25px]">
              <div className="md:grid grid-cols-2 gap-x-[50px] gap-y-[25px] flex flex-col ">
                <div>
                  <span>First Name</span>
                  <div>
                    <input
                      type="text"
                      className="outline-none bg-teal-200/20 text-[13px] p-[10px] rounded-md Poppins"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <span>Last Name</span>
                  <div>
                    <input
                      type="text"
                      className="outline-none bg-teal-200/20 text-[13px] p-[10px] rounded-md Poppins"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <span>Email Address</span>
                  <div>
                    <input
                      type="email"
                      className="outline-none bg-teal-200/20 text-[13px] p-[10px] rounded-md Poppins"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <span>Country</span>
                  <div>
                    <input
                      type="text"
                      className="outline-none bg-teal-200/20 text-[13px] p-[10px] rounded-md Poppins"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <span>Province</span>
                  <div>
                    <input
                      type="text"
                      className="outline-none bg-teal-200/20 text-[13px] p-[10px] rounded-md Poppins"
                      value={province}
                      onChange={(e) => setProvince(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <span>City</span>
                  <div>
                    <input
                      type="text"
                      className="outline-none bg-teal-200/20 text-[13px] p-[10px] rounded-md Poppins"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <span>Street</span>
                  <div>
                    <input
                      type="text"
                      className="outline-none bg-teal-200/20 text-[13px] p-[10px] rounded-md Poppins"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <span>Phone Number</span>
                  <div>
                    <input
                      type="text"
                      className="outline-none bg-teal-200/20 text-[13px] p-[10px] rounded-md Poppins"
                      value={phoneNumber}
                      onChange={(e) => setphoneNumber(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="flex md:justify-end justify-start gap-[10px] pt-[50px]">
                <div className="py-[10px] px-[25px] border-gray-400 border-solid border-[1px] rounded-md w-fit hover:bg-gray-200 cursor-pointer">
                  <span>Cancel</span>
                </div>
                <div className="py-[10px] border-[#29ADB2] border-solid border-[1px] w-fit px-[25px] bg-[#29ADB2] hover:bg-[#3B9B92] text-white Poppins rounded-md cursor-pointer  ">
                  <span>Update</span>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mt-[50px]">
            <div>
              <span>No Orders to Show</span>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Section2;
