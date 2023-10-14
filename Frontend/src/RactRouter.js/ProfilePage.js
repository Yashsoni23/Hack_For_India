import React, { useEffect, useState } from "react";
import { FaMessage, FaPen } from "react-icons/fa6";

function ProfilePage() {
  const [proEditable, setProEditable] = useState(false);
  const [userWorker, setUserWorker] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("loginData")));
    // data.Catagory == "client" && setUserWorker(false)
  }, []);

  const heandalinput = (event) => {
    if (proEditable) {
      const name = event.target.name;
      const value = event.target.value;
      setData((prev) => {
        return { ...prev, [name]: value };
      });
    }
  };

  const setEditedData = () => {
    localStorage.setItem("loginData", JSON.stringify(data));
  };

  return (
    <div className="relative bg-slate-100 h-screen w-full pt-[5rem]">
      <div className="container px-[1.2rem] p-5">
        <div className="md:flex gap-[2rem] no-wrap  ">
          {/* <div className="absolute top-[5rem] right-[1rem] bg-red-400 h-[2rem] w-[3rem] t">Edit</div> */}

          <div className="w-full md:w-[19rem] md:mx-2">
            <div className="bg-white p-[1rem] rounded-[1rem] shadow-[0_4px_7px_rgba(0,0,0,0.4)]">
              <div className="mx-auto mt-[1rem] h-[14rem] w-[14rem] mb-[1rem]">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudDbHeW2OobhX8E9fAY-ctpUAHeTNWfaqJA&usqp=CAU"
                  className="h-full w-full"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="image overflow-hidden">
                <img
                  className="h-auto w-full mx-auto"
                  src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                  alt=""
                />
              </div>
              <input
                required
                onChange={(e) => heandalinput(e)}
                name="phone"
                value={data?.userName}
                placeholder="userName"
                className="text-gray-900 font-bold text-xl leading-8 my-1 bg-transparent"
                disabled
              />

              <h3 className="text-gray-600 font-lg text-semibold leading-6">
                Owner at Her Company Inc.
              </h3>
              <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur
                non deserunt
              </p>
              <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                  <span>Status</span>
                  <span className="ml-auto">
                    <span className="bg-primaryColor py-1 px-2 rounded text-white text-sm">
                      {userWorker ? "Worker" : "client"}
                    </span>
                  </span>
                </li>
                {userWorker && (
                  <li className="flex items-center py-3">
                    <span>Work</span>
                    <span className="ml-auto">{data?.Catagory}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="relative w-full md:w-9/12 mx-2 h-64 max-sm:h-fit">
            <div className="absolute flex-col m-[1rem] top-0 right-0 ">
              <div
                onClick={() => setProEditable(!proEditable)}
                className="cursor-pointer mb-[.4rem] py-[.3rem] px-[1rem] rounded-[1rem] bg-ButtonColor text-white font-semibold"
              >
                Edit
              </div>

              {proEditable && (
                <div
                  onClick={() => setProEditable(!proEditable)}
                  className="cursor-pointer py-[.3rem] px-[1rem] rounded-[1rem] bg-primaryColor text-white font-semibold"
                >
                  Save
                </div>
              )}
            </div>
            <div className="max-sm:mt-[2rem] w-full bg-white p-[2rem] pb-[3rem] pr-[6rem] rounded-[1rem] shadow-[0_4px_7px_rgba(0,0,0,0.4)]">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                  <svg
                    className="h-[2rem]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span className="tracking-wide text-[2rem]">About</span>
              </div>
              <div className="text-gray-700 mt-[1.5rem]">
                <div className="grid md:grid-cols-1 text-sm">
                  <div className="grid grid-cols-2 max-sm:grid-cols-1 text-[1.4rem] my-[.6rem]">
                    <div className="px-4 py-2 font-semibold">Name</div>
                    {proEditable ? (
                      <input
                        required
                        onChange={(e) => heandalinput(e)}
                        name="userName"
                        placeholder="Name"
                        value={data?.userName}
                        className="px-4 py-2 -ml-[12rem] max-sm:ml-0 bg-transparent border-b-2 border-ButtonColor/50 outline-none focus:border-ButtonColor duration-300"
                      />
                    ) : (
                      <input
                        required
                        onChange={(e) => heandalinput(e)}
                        name="userName"
                        placeholder="Name"
                        value={data?.userName}
                        className="px-4 py-2 -ml-[12rem] max-sm:-ml-0 bg-transparent border-b-2 outline-none focus:border-ButtonColor duration-300"
                        disabled
                      />
                    )}
                  </div>

                  <div className="grid grid-cols-2 max-sm:grid-cols-1 text-[1.4rem] my-[.6rem]">
                    <div className="px-4 py-2 font-semibold">Email.</div>
                    <div className=" -ml-[12rem] max-sm:ml-0">
                      {proEditable ? (
                        <input
                          type="text"
                          required
                          onChange={(e) => heandalinput(e)}
                          name="Email"
                          className="w-full px-4 py-2 bg-transparent max-sm:ml-0 border-b-2 border-ButtonColor/50 outline-none focus:border-ButtonColor duration-300"
                          placeholder="Email"
                          value={data?.Email}
                        />
                      ) : (
                        <input
                          type="text"
                          required
                          onChange={(e) => heandalinput(e)}
                          name="Email"
                          className="w-full px-4 py-2 bg-transparent max-sm:ml-0 border-b-2 outline-none focus:border-ButtonColor duration-300"
                          placeholder="Email"
                          value={data?.Email}
                          disabled
                        />
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 max-sm:grid-cols-1 text-[1.4rem] my-[.6rem] ">
                    <div className="px-4 py-2 font-semibold">Gender</div>

                    {!proEditable ? (
                      <div className="px-4 py-2 -ml-[12rem] max-sm:ml-0 flex gap-[2rem] justify-start border-b-2 border-slate-200">
                        <div className="">Female</div>
                      </div>
                    ) : (
                      <div className="px-4 py-2 -ml-[12rem] max-sm:ml-0 flex gap-[2rem] justify-start">
                        <div className="flex gap-[.8rem] items-center capitalize">
                          <input
                            type="radio"
                            name="Gender"
                            id="male"
                            onClick={(e) => heandalinput(e)}
                            value="male"
                            className="scale-[1.6]"
                          />
                          <label htmlFor="male">male</label>
                        </div>
                        <div className="flex gap-[.8rem] items-center capitalize">
                          <input
                            type="radio"
                            name="Gender"
                            id="female"
                            onClick={(e) => heandalinput(e)}
                            value="female"
                            className="scale-[1.6]"
                          />
                          <label htmlFor="female">female</label>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-2 max-sm:grid-cols-1 text-[1.4rem] my-[.6rem]">
                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                    {proEditable ? (
                      <input
                        required
                        onChange={(e) => heandalinput(e)}
                        name="Contect"
                        value={data?.Contect}
                        type="text"
                        className="px-4 py-2 -ml-[12rem] border-b-2 max-sm:ml-0 border-ButtonColor/50 outline-none focus:border-ButtonColor transition-colors duration-300"
                        placeholder="Add Contect number"
                      />
                    ) : (
                      <input
                        required
                        onChange={(e) => heandalinput(e)}
                        name="Contect"
                        value={data?.Contect}
                        type="text"
                        className="px-4 py-2 -ml-[12rem] border-b-2 max-sm:ml-0 bg-transparent outline-none focus:border-ButtonColor transition-colors duration-300"
                        placeholder="Add Contect number"
                        disabled
                      />
                    )}
                  </div>
                  <div className="grid grid-cols-2 max-sm:grid-cols-1 text-[1.4rem] my-[.6rem]">
                    <div className="px-4 py-2 font-semibold">Address</div>

                    {proEditable ? (
                      <input
                        required
                        onChange={(e) => heandalinput(e)}
                        name="Addres"
                        value={data?.Addres}
                        className="px-4 py-2 -ml-[12rem] bg-transparent max-sm:ml-0 border-b-2 border-ButtonColor/50 outline-none focus:border-ButtonColor duration-300"
                        placeholder="Address"
                      />
                    ) : (
                      <input
                        required
                        onChange={(e) => heandalinput(e)}
                        name="Addres"
                        value={data?.Addres}
                        className="px-4 py-2 -ml-[12rem] bg-transparent max-sm:ml-0 border-b-2 outline-none focus:border-ButtonColor duration-300"
                        placeholder="Address"
                        disabled
                      />
                    )}
                  </div>

                  <div className="grid grid-cols-2 max-sm:grid-cols-1 text-[1.4rem] my-[.6rem]">
                    <div className="px-4 py-2 font-semibold">Birthday</div>
                    {proEditable ? (
                      <input
                        required
                        onChange={(e) => heandalinput(e)}
                        name="Birthday"
                        value={data?.Birthday}
                        className="w-[16rem] px-4 py-2 -ml-[12rem] max-sm:ml-0 bg-transparent border-b-2 border-ButtonColor/50 outline-none focus:border-ButtonColor duration-300"
                        type="date"
                      />
                    ) : (
                      <input
                        required
                        onChange={(e) => heandalinput(e)}
                        name="Birthday"
                        value={data?.Birthday}
                        className="w-[16rem] px-4 py-2 -ml-[12rem] max-sm:ml-0 bg-transparent border-b-2  outline-none focus:border-ButtonColor duration-300"
                        type="date"
                        disabled
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
