var btn = $("button")
var inner = $(".inner_area")
var btn_left = btn.position().left
var btn_top = btn.position().top
var max_left = 130
var max_top = 130
var max_right = 130
var max_bottom = 130
btn.on("mouseenter", () => {

})
inner.on("mouseenter", () => {
    // $(document).mousemove(function(e) {
    //     var btn_cordinates = btn.offset()
    //     var pointer_left = e.pageX - btn_cordinates.left - 100
    //     var pointer_right = e.pageY - btn_cordinates.top - 100
    //     console.log(pointer_left + " " + pointer_right)
    // });
    // btn_cordinates.left = `${btn_cordinates.left + 5} px`;
    // btn_cordinates.top = `${btn_cordinates.top + 5} px`;
    // btn.off("click", () => {
    //     btn.css({
    //         left: "120 px"   ,
    //         top: "120 px",
    //         bottom: "120 px",
    //     })
    //})
    btn_left = btn.position().left
    btn_top = btn.position().top
    var set_top = (btn_top + 10) + "px"
    var set_left = (btn_left + 10) + "px"
    btn.css({ "top": set_top, "left": set_left })

})