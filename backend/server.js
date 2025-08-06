require('dotenv').config()
const app = require("./src/app")
const { createServer } = require("http");
const { Server } = require("socket.io");
const generatResponse = require("./src/services/ai.servic");

const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
  console.log("a new user connected")
  socket.on("userPrompt",async (data)=>{
const response =await generatResponse(data)
socket.emit("aiResponse",{response})
  })
  socket.on("disconnect",()=>{
    console.log("a user disconnected")
  })
});

httpServer.listen(process.env.PORT || 3000 ,()=>{
    console.log("server is running on port 3000")
})
