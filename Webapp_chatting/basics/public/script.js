$(function() {
    let socket = io();
    let username = ""
    $("#sub_msg").hide()
    $("#login").on("click", () => {
        username = $("#user").val()
        $("#login").hide()
        $("#sub_msg").show()
    })
    $("#sub_msg").on("click", () => {
        socket.emit("client_msg", `${username} : ${$("#msg_val").val()}`)
    })
    socket.on("msg", (message) => {
        $("ul").append(`
              <li>${message}</li>
        `);
    })
})