const server = require("http").createServer();
const io = require("socket.io")(server, { cors: { origin: "*" } });

const PORT = 4000;
const NEW_MESSAGE = "NewMessage";

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

server.listen(PORT, () => {
  console.log("server is up");
});
