const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http, { 
  cors: { 
    origin: "https://603da57e6686922f5d7e27f3--livechatreactapp.netlify.app", 
    methods: ["GET", "POST"], 
    credentials:true
  }  

},);

const PORT = process.env.PORT || 4000;
const NEW_MESSAGE = "NewMessage";

app.get('/api', (req,res)=> {
  res.send('<h1>Hello</h1>')
})


io.on("connection", (socket) => {
  const { roomId } = socket.handshake.query;
  socket.join(roomId);

  socket.on(NEW_MESSAGE, (data) => {
    io.in(roomId).emit(NEW_MESSAGE, data);
  });

  socket.on("disconnect", () => {
    socket.leave(roomId);
  });
});

http.listen(PORT, () => {
  console.log("server is up");
});
