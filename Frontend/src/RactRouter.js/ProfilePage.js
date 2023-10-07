import React, { useEffect, useState } from "react";
import { FaMessage, FaPen } from "react-icons/fa6";

function ProfilePage() {
  const [proEditable, setProEditable] = useState(false);
  const [userWorker, setUserWorker] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("loginData")));
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
    <section className="absolute top-0 bottom-0  w-full text-black pt-[6rem] p-[2rem]">
      <div className="absolute right-[2rem] flex gap-[1rem] ">
        {proEditable && (
          <div
            onClick={setEditedData}
            className="cursor-pointer flex justify-center items-center gap-[.8rem] h-[2.5rem] font-medium px-[1.4rem] rounded-[2rem] text-white bg-primaryColor"
          >
            <h2>save</h2>
          </div>
        )}
        <div
          onClick={() => setProEditable(!proEditable)}
          className="cursor-pointer flex justify-center items-center gap-[.8rem] h-[2.5rem] font-medium px-[1rem] rounded-[2rem] bg-Cardcolor"
        >
          <FaPen />
          <h2>Edit</h2>
        </div>
      </div>
      <div className="flex max-sm:flex-col max-sm:gap-[4rem] gap-[2rem] p-[2rem] h-full w-full ">
        <div className="flex flex-col max-sm:justify-center max-sm:items-center gap-[3rem] h-full w-1/4 max-sm:w-full">
          <div className="relative ml-[1rem] h-[15rem] w-[15rem] rounded-full  bg-red-300">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudDbHeW2OobhX8E9fAY-ctpUAHeTNWfaqJA&usqp=CAU"
              alt=""
              className=" h-[15rem] w-[15rem] rounded-full bg-green-400"
            />
            <div className="absolute bottom-[1.5rem] right-[1rem] flex justify-center items-center h-[2.5rem] w-[2.5rem] rounded-full bg-Cardcolor">
              <FaPen className="text-[1.2rem]" />
            </div>
          </div>

          <div className="px-[2rem]">
            <div className="flex justify-center items-center h-[2.5rem] text-[1.2rem] w-[13rem] rounded-[1.3rem] bg-ButtonColor text-white">
              {userWorker ? "worker" : "client"}
            </div>
            <div className="flex max-sm:hidden max-sm:w-full flex-col max-sm:flex-row">
            <div>
            <h2 className="mt-[3rem] text-[1.4rem] font-semibold">
              Profession
            </h2>
              <h1>carpainter</h1>
            </div>
            <div>
              <h1 className="mt-[.6rem] text-[1.4rem] font-semibold ">
                experience
              </h1>
              <h1>3 Year</h1>
            </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            proEditable && " text-primaryColor"
          } flex flex-col gap-[1.2rem] h-full w-3/4 max-sm:w-full  max-sm:w-full"`}
        >
          <div className="h-[2/3]">
            <div className="flex flex-col gap-[.2rem]">
              <input
                onChange={(e) => proEditable && heandalinput(e)}
                placeholder="Add Username"
                name="name"
                contentEditable="false"
                className="p-[.4rem] outline-none text-[2rem] font-bold border-primaryColor/40 border-dotted border-[.2rem] rounded-[.4rem]"
                value={data?.name}
              ></input>
              <input
                onChange={(e) => proEditable && heandalinput(e)}
                placeholder="Add Email"
                name="Email"
                className="p-[.4rem] outline-none border-primaryColor/40 border-dotted border-[.2rem] rounded-[.4rem]"
                value={data?.Email}
              ></input>
            </div>
            {userWorker && (
              <div>
                <h2 className="text-[1.2rem] font-semibold">reating</h2>
                <div className="flex items-center gap-[1rem]">
                  <span className="text-[2rem]">8,6</span>
                  <div class="rating">
                    <input value="5" name="rate" id="star5" type="radio" />
                    <label title="text" for="star5"></label>
                    <input value="4" name="rate" id="star4" type="radio" />
                    <label title="text" for="star4"></label>
                    <input
                      value="3"
                      name="rate"
                      id="star3"
                      type="radio"
                      checked=""
                    />
                    <label title="text" for="star3"></label>
                    <input value="2" name="rate" id="star2" type="radio" />
                    <label title="text" for="star2"></label>
                    <input value="1" name="rate" id="star1" type="radio" />
                    <label title="text" for="star1"></label>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-[2rem] text-white">
            <div className="flex items-center justify-center h-[2.6rem] w-[12rem] gap-[.5rem] text-[1.2rem] text-black">
              {" "}
              <FaMessage className="text-[1.4rem]" /> <h2>send message</h2>
            </div>
            <div className="flex items-center justify-center h-[2.6rem] w-[12rem] gap-[.5rem] text-[1.2rem] bg-ButtonColor ">
              {" "}
              <h2>contect</h2>
            </div>
          </div>

          <div className="my-[1rem] h-[.1rem] w-full bg-TextColor2"></div>

          <div className="h-[1/3] flex flex-col gap-[.3rem] w-ful">
            <div className="w-full flex gap-[2rem]">
              <h2 className="w-[5rem] text-[1.2rem] font-semibold capitalize">
                phone :
              </h2>
              <input
                required
                onChange={(e) => proEditable && heandalinput(e)}
                name="ConfPasswrod"
                value={data?.phone}
                type="text"
                placeholder="add Number"
                className="px-[.4rem] border-primaryColor/40 border-dotted border-[.2rem] rounded-[.4rem] outline-none"
              />
            </div>

            <div className="w-full flex gap-[2rem]">
              <h2 className="w-[5rem] text-[1.2rem] font-semibold capitalize">
                addres :
              </h2>
              <input
                required
                onChange={(e) => proEditable && heandalinput(e)}
                name="ConfPasswrod"
                value={data?.addres}
                type="text"
                placeholder="add Number"
                className="px-[.4rem] border-primaryColor/40 border-dotted border-[.2rem] rounded-[.4rem] outline-none"
              />
            </div>

            <div className="w-full flex gap-[2rem]">
              <h2 className="w-[5rem] text-[1.2rem] font-semibold capitalize">
                eamil :
              </h2>
              <input
                required
                onChange={(e) => proEditable && heandalinput(e)}
                name="ConfPasswrod"
                value={data?.eamil}
                type="text"
                placeholder="add eamil"
                className="px-[.4rem] border-primaryColor/40 border-dotted border-[.2rem] rounded-[.4rem] outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfilePage;
