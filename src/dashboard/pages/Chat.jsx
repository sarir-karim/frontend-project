import { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";
import { BsCameraVideo, BsTelephone, BsThreeDots } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { RiCheckDoubleFill } from "react-icons/ri";
import {BsFillEmojiWinkFill} from 'react-icons/bs'
import {RiAttachment2} from 'react-icons/ri'
import {BiMicrophone} from 'react-icons/bi'
import {IoPaperPlane} from 'react-icons/io5'


const Chat = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Alice",
      imageUrl: "https://randomuser.me/api/portraits/women/10.jpg",
      newMessageCount: 3,
      email: "someone@gmail.com",
      lastMessage: "hehehehe",
    },
    {
      id: 2,
      name: "Bob",
      imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
      newMessageCount: 0,
      email: "someone@gmail.com",
      lastMessage: "here it is",
      messageSent: <RiCheckDoubleFill />,
    },
    {
      id: 3,
      name: "Charlie",
      imageUrl: "https://randomuser.me/api/portraits/men/12.jpg",
      newMessageCount: 2,
      email: "someone@gmail.com",
      lastMessage: "world is this",
    },
    {
      id: 4,
      name: "Charlie",
      imageUrl: "https://randomuser.me/api/portraits/men/13.jpg",
      newMessageCount: 0,
      email: "someone@gmail.com",
      lastMessage: "world is this",
    },
    {
      id: 5,
      name: "Charlie",
      imageUrl: "https://randomuser.me/api/portraits/men/13.jpg",
      newMessageCount: 1,
      email: "someone@gmail.com",
      lastMessage: "world is this",
    },
    {
      id: 6,
      name: "Charlie",
      imageUrl: "https://randomuser.me/api/portraits/men/14.jpg",
      newMessageCount: 0,
      email: "someone@gmail.com",
      lastMessage: "world is this",
    },
    {
      id: 7,
      name: "Charlie",
      imageUrl: "https://randomuser.me/api/portraits/men/15.jpg",
      newMessageCount: 0,
      email: "someone@gmail.com",
      lastMessage: "world is this",
    },
    {
      id: 8,
      name: "Charlie",
      imageUrl: "https://randomuser.me/api/portraits/men/16.jpg",
      newMessageCount: 0,
      email: "someone@gmail.com",
      lastMessage: "world is this",
    },
    {
      id: 9,
      name: "Charlie",
      imageUrl: "https://randomuser.me/api/portraits/men/17.jpg",
      newMessageCount: 1,
      email: "someone@gmail.com",
      lastMessage: "world is this",
    },
    {
      id: 10,
      name: "Charlie",
      imageUrl: "https://randomuser.me/api/portraits/men/18.jpg",
      newMessageCount: 1,
      email: "someone@gmail.com",
      lastMessage: "world is this",
    },
    {
      id: 11,
      name: "Charlie",
      imageUrl: "https://randomuser.me/api/portraits/men/19.jpg",
      newMessageCount: 0,
      email: "someone@gmail.com",
      lastMessage: "world is this",
    },
  ]);

  const [selectedUserId, setSelectedUserId] = useState(1);

  const handleUserSelect = (userId) => {
    setSelectedUserId(userId);
    setUsers(
      users.map((user) => {
        if (user.id === userId) {
          return { ...user, newMessageCount: 0 };
        }
        return user;
      })
    );
  };

  return (
    <div className="bg-[#F4F6FA] px-4">
      <div className="flex justify-between items-center pt-5 ">
        <span className="text-md  ">Hi! Good Morning</span>
        <span className="text-md font-medium ">
          Sunday, 9 April 2024, 10:24PM
        </span>
      </div>

      <div className="flex justify-between pt-3 items-center">
        <p className="text-3xl font-bold">Team Collaboration</p>
        <div className="flex items-center gap-3">
          <button className="btn bg-white btn-outline font-bold text-[11px] text-black rounded-[15px] btn-sm pt-4 pb-4 pl-4 pr-4 pb-6">
            Notify Guests
          </button>
        </div>
      </div>
      <div className=" bg-white mt-5 rounded-xl">
        <div className="flex justify-between py-4 px-4 border-b">
          <div className="flex flex-col">
            <span className="font-bold">All Messages</span>
            <span className="text-gray-400 text-sm">
              351 Messages, 8 Unread
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button className="btn btn-md bg-black btn-outline text-[15px] text-white flex gap-3  rounded-[15px] btn-sm pt-[10px] pb-[12px] pl-4 pr-4 capitalize">
              <IoAddOutline className="text-2xl" />
              New team
            </button>
            {/* <button className="btn bg-white btn-outline text-[11px] text-black rounded-[15px] btn-sm pt-0 pb-4 pl-4 pr-4 pb-6 flex"> */}
            <button className="btn gap-2 relative rounded-xl p-3 bg-[#F5F5F5] border-none">
              <IoNotificationsOutline className="text-[27px] text-black" />
              <div className="badge bg-[#FFCC00] text-black absolute top-1 right-[2px] ">
                5
              </div>
            </button>
            {/* </button> */}
          </div>
        </div>

        <div className="flex">
          {/* User list */}
          <div className="w-[25%] h-[89vh] overflow-y-scroll hide-scrollbar border-r border-gray-200 ">
            <div className="p-4">
              <input
                type="text"
                placeholder="Search users"
                className="w-full p-2 rounded-md bg-gray-100"
              />
            </div>
            <ul>
              {users.map((user) => (
                <li
                  key={user.id}
                  className={`px-3 py-2 cursor-pointer mb-2 ${
                    selectedUserId === user.id ? "bg-gray-100" : ""
                  }`}
                  onClick={() => handleUserSelect(user.id)}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <img
                        src={user.imageUrl}
                        alt={user.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex flex-col">
                        <h2 className="font-medium">{user.name}</h2>
                        <h2 className="text-sm text-gray-500 ">
                          {user.lastMessage}
                        </h2>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="text-sm">9.15 PM</div>
                      {user.newMessageCount > 0 && (
                        <span className="bg-black text-white text-xs flex items-center justify-center rounded-tl-full rounded-tr-full rounded-br-full w-5 h-5 text-center">
                          {user.newMessageCount}
                          {user.newMessageCount > 1 ? "" : ""}
                        </span>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Chat area */}
          <div className="w-3/4">
            <div className="flex items-center justify-between bg-white border-b border-gray-200 p-4">
              <div className="flex items-center gap-2">
                <img
                  src={
                    users.find((user) => user.id === selectedUserId)?.imageUrl
                  }
                  alt={users.find((user) => user.id === selectedUserId)?.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex flex-col">
                  <h2 className="font-medium">
                    {users.find((user) => user.id === selectedUserId)?.name}
                  </h2>
                  <span className="text-sm text-gray-500">
                    {users.find((user) => user.id === selectedUserId)?.email}
                  </span>
                </div>
              </div>
              <div className="flex gap-3 text-[#84818A]">
                <BsCameraVideo className="text-md" />
                <BsTelephone className="text-md" />
                <FiSearch className="text-md" />
                <BsThreeDots className="text-md" />
              </div>
            </div>
            <div className=" p-4 h-[70vh] overflow-y-scroll hide-scrollbar">
              {/* Chat messages */}
              {/* their message */}
              <div className="mb-4">
                <div className="flex gap-2">
                  <div className="bg-gray-200 p-2 max-w-[43%] rounded-tl-xl rounded-tr-xl rounded-bl-xl bg-[#F1F6FA]">
                    <p className="text-gray-800 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="text-gray-500  text-end text-xs flex gap-2 items-center justify-end  ">
                      12:30 PM <RiCheckDoubleFill />
                    </div>
                  </div>
                </div>
              </div>
              {/* my message */}
              <div className="mb-4">
                <div className="flex gap-2 flex-row-reverse bg-[#0F172A] max-w-[43%] ml-auto rounded-tl-xl rounded-tr-xl rounded-br-xl">
                  <div className=" rounded-md p-2">
                    <p className="text-white text-sm">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium.
                    </p>
                    <div className="text-gray-500  text-end text-xs flex gap-2 items-center justify-end mt-2 text-[#B8CDFF]">
                      12:30 PM <RiCheckDoubleFill />
                    </div>
                  </div>
                </div>
                {/* day */}
                <div className="text-md uppercase text-gray-400 text-center my-4">
                  Today
                </div>
                {/* their message */}
                <div className="bg-gray-200 p-2 max-w-[43%] rounded-tl-xl rounded-tr-xl rounded-bl-xl bg-[#F1F6FA]">
                  <p className="text-gray-800 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="text-gray-500  text-end text-xs flex gap-2 items-center justify-end ">
                    12:30 PM <RiCheckDoubleFill />
                  </div>
                </div>
              </div>
              {/* my message */}
              <div className="flex gap-2 flex-row-reverse bg-[#0F172A] max-w-[43%] ml-auto rounded-tl-xl rounded-tr-xl rounded-br-xl">
                <div className=" rounded-md p-2">
                  <p className="text-white text-sm">
                    Sed ut perspiciatis unde omnis iste natus 😜🤣
                  </p>
                  <div className="text-gray-500  text-end text-xs flex gap-2 items-center justify-end mt-2 text-[#B8CDFF]">
                    12:30 PM <RiCheckDoubleFill />
                  </div>
                </div>
              </div>
              {/* my message */}
              <div className="flex gap-2 flex-row-reverse bg-[#0F172A] max-w-[43%] mt-3 ml-auto rounded-tl-xl rounded-tr-xl rounded-br-xl">
                <div className=" rounded-md p-2">
                  <p className="text-white text-sm">
                    Sed ut perspiciatis unde omnis iste natus 🔥
                  </p>
                  <div className="text-gray-500  text-end text-xs flex gap-2 items-center justify-end mt-2 text-[#B8CDFF]">
                    12:30 PM <RiCheckDoubleFill />
                  </div>
                </div>
              </div>
              {/* their message */}
              <div className="bg-gray-200 p-2 max-w-[43%] rounded-tl-xl rounded-tr-xl rounded-bl-xl bg-[#F1F6FA] mb-3">
                <p className="text-gray-800 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="text-gray-500  text-end text-xs flex gap-2 items-center justify-end ">
                  12:30 PM <RiCheckDoubleFill />
                </div>
              </div>

              {/* my message */}
              <div className="mb-2">
                <div className="flex gap-2 flex-row-reverse bg-[#0F172A] max-w-[43%] ml-auto rounded-tl-xl rounded-tr-xl rounded-br-xl">
                  <div className=" rounded-md p-2">
                    <p className="text-white text-sm">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium.
                    </p>
                    <div className="text-gray-500  text-end text-xs flex gap-2 items-center justify-end mt-2 text-[#B8CDFF]">
                      12:30 PM <RiCheckDoubleFill />
                    </div>
                  </div>
                </div>
              </div>

              {/* Message input */}
            </div>
            <div className="form-control px-2 ">
              <label className="input-group border-2 rounded-xl bg-[#F6F8FA]">
                <input
                  type="text"
                  placeholder="Type something"
                  className="input input-md w-full input-bordered border-none bg-transparent"
                />
                <span className="bg-transparent flex  gap-4 text-xl text-gray-500">
                  <BsFillEmojiWinkFill/>
                  <RiAttachment2/>
                  <BiMicrophone/>
                  <IoPaperPlane className="text-black"/>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
