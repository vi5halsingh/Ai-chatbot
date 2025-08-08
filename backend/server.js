require('dotenv').config()
const app = require("./src/app")
const { createServer } = require("http");
const { Server } = require("socket.io");
const generatResponse = require("./src/services/ai.servic");
const cors = require('cors')
const httpServer = createServer(app);
const io = new Server(httpServer, { 
  cors:{
    origin:"http://localhost:5173"
  }
 });


const chatHistory = []
io.on("connection", (socket) => {
  // console.log("a new user connected")
  socket.on("userPrompt",async (data)=>{
    // console.log(data)
    chatHistory.push(
    { role:"user",
      parts:[
        {
          text:data
        }
      ]
    }
  )
  console.log(chatHistory)
const response =await generatResponse(chatHistory)
chatHistory.push({
  role:'model',
  parts:[
    {text:response}
  ]
})
socket.emit("aiResponse",{response})
// console.log("response:",response)
  })
  socket.on("disconnect",()=>{
    console.log("a user disconnected")
  })
});

httpServer.listen(process.env.PORT || 3000 ,()=>{
    console.log("server is running on port 3000")
})
