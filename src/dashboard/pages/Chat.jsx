import { useState } from "react";

const Chat = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", imageUrl: "https://randomuser.me/api/portraits/women/10.jpg", newMessageCount: 3 },
    { id: 2, name: "Bob", imageUrl: "https://randomuser.me/api/portraits/men/5.jpg", newMessageCount: 0 },
    { id: 3, name: "Charlie", imageUrl: "https://randomuser.me/api/portraits/men/12.jpg", newMessageCount: 1 },
  ]);

  const [selectedUserId, setSelectedUserId] = useState(1);

  const handleUserSelect = (userId) => {
    setSelectedUserId(userId);
    setUsers(users.map((user) => {
      if (user.id === userId) {
        return { ...user, newMessageCount: 0 };
      }
      return user;
    }));
  };

  return (
    <div className="h-screen flex">
      {/* User list */}
      <div className="w-1/4 border-r border-gray-200">
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
              className={`px-4 py-2 cursor-pointer ${
                selectedUserId === user.id ? "bg-gray-100" : ""
              }`}
              onClick={() => handleUserSelect(user.id)}
            >
              <div className="flex items-center gap-2">
                <img
                  src={user.imageUrl}
                  alt={user.name}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col">
                  <h2 className="font-medium">{user.name}</h2>
                  {user.newMessageCount > 0 && (
                    <span className="bg-blue-500 text-white text-sm rounded-full px-2 py-1">
                      {user.newMessageCount} new message{user.newMessageCount > 1 ? "s" : ""}
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
        <div className="flex items-center justify-between bg-gray-100 border-b border-gray-200 p-4">
          <div className="flex items-center gap-2">
            <img
              src={users.find((user) => user.id === selectedUserId)?.imageUrl}
              alt={users.find((user) => user.id === selectedUserId)?.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col">
              <h2 className="font-medium">
                {users.find((user) => user.id === selectedUserId)?.name}
              </h2>
              <span className="text-sm text-gray-500">Online</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-2 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600">
              Pin
            </button>
            <button className="px-2 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600">
              Unread
            </button>
         
            </div>
        </div>
        <div className="h-full p-4">
          {/* Chat messages */}
          <div className="mb-4">
            <div className="flex gap-2">
              <img
                src={users.find((user) => user.id === selectedUserId)?.imageUrl}
                alt={users.find((user) => user.id === selectedUserId)?.name}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <div className="bg-gray-200 rounded-md p-2">
                  <p className="text-gray-800">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="text-gray-500 text-sm">12:30 PM</div>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex gap-2 flex-row-reverse">
              <img
                src={users.find((user) => user.id === selectedUserId)?.imageUrl}
                alt={users.find((user) => user.id === selectedUserId)?.name}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <div className="bg-blue-500 rounded-md p-2">
                  <p className="text-white">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium.
                  </p>
                </div>
                <div className="text-gray-500 text-sm text-right">12:31 PM</div>
              </div>
            </div>
          </div>

          {/* Message input */}
          <form>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message"
                className="flex-grow p-2 rounded-md bg-gray-100"
              />
              <button
                type="submit"
                className="px-2 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
