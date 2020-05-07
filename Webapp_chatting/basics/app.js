var express = require("express"),
    app = express(),
    http = require("http"),
    server = http.createServer(app),
    socketio = require("socket.io"),
    io = socketio(server)
app.use(express.static(__dirname + "/public"))

io.on('connection', (socket) => {
    socket.emit("msg", "A user has joined the chat")
    socket.on("client_msg", (msg) => {
        io.emit("msg", msg)
    })
});
server.listen(process.env.PORT || 3000, () => {
    console.log("server has started")
})