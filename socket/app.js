import { Server } from "socket.io";


const io = new Server({
  cors: {
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST"], // Specify allowed HTTP methods if needed
    credentials: true, // Enable credentials if you need to allow cookies or other credentials
  },
});
let onlineUser = [];

const addUser = (userId, socketId) => {
  console.log("Adding user:", userId, socketId);
  const userExits = onlineUser.find((user) => user.userId === userId);
  if (!userExits) {
    onlineUser.push({ userId, socketId });
  }
};

const removeUser = (socketId) => {
  console.log("Removing user:", socketId);
  onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  console.log("Getting user:", userId);
  return onlineUser.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  console.log("New connection:", socket.id);
  socket.on("newUser", (userId) => {
    addUser(userId, socket.id);
  });

  socket.on("sendMessage", ({ receiverId, data }) => {
    console.log("Sending message to:", receiverId, data);
    const receiver = getUser(receiverId);
    io.to(receiver.socketId).emit("getMessage", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    removeUser(socket.id);
  });
});

io.listen("4000", () => {
  console.log("server is running");
});
