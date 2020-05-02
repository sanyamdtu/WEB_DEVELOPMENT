$(function() {
    let socket = io();
    socket.on("msg", (message) => {
        $("ul").append(`
          <li>${message}</li>
        `);
    })
    $("#sub_msg").on("click", () => {
        socket.emit("client_msg", $("#msg_val").val())
    })
})