// Socket.io handlers: live chat, live progress, GPS, notifications
export const registerSocketHandlers = (io) => {
  io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id);

    socket.on("project:join", (projectId) => {
      socket.join(`project:${projectId}`);
    });

    socket.on("chat:join", (room) => {
      socket.join(room);
    });

    socket.on("chat:message", ({ room, message }) => {
      io.to(room).emit("chat:message", message);
    });

    socket.on("supervisor:gps", ({ projectId, lat, lng }) => {
      io.to(`project:${projectId}`).emit("gps:update", { lat, lng, timestamp: Date.now() });
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected:", socket.id);
    });
  });
};
