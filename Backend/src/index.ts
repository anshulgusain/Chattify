import { WebSocketServer,WebSocket } from "ws";

const wss=new WebSocketServer({port:8080});

interface User{
  socket:WebSocket,
  room:string
}

let usercount=0;
let allSocket:User[]=[];


wss.on("connection",(socket)=>{
  // allSocket.push(socket)
  console.log("User connected #"+ usercount)
  usercount=usercount+1;

  socket.on("message", (message)=>{
  const parsedMessage=JSON.parse(message as unknown as string)
  if(parsedMessage.type==="join"){
    console.log("user joined room: " + parsedMessage.payload.room)
  allSocket.push({
    socket,
    room:parsedMessage.payload.roomId
  })
  }

  if(parsedMessage.type==="chat"){
    console.log("user want to chat")
    let currentUserRoom=null
    for(let i=0;i<allSocket.length;i++){
      if(allSocket[i].socket==socket){
        currentUserRoom=allSocket[i].room
      }
    }

    for(let i=0;i<allSocket.length;i++){
      if(allSocket[i].room==currentUserRoom){
        allSocket[i].socket.send(parsedMessage.payload.message)
      }
    }
  }


  })

// socket.on("disconnect",()=>{
//   allSocket=allSocket.filter(x=>x!=socket)
// })


})


