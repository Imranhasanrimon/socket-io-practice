const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io")
const cors = require("cors");

app.use(cors())

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5174",
        method: ["GET", "POST"]
    },
})

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on("send_measage", (data) => {
        socket.broadcast.emit("receive_message", data)
    })
    socket.on("disconnect", () => {
        console.log(`User disconnect: ${socket.id}`);
    })
})

server.listen(2000, () => {
    console.log("socket.io server is running on port 2000");
})