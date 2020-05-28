var express=require("express"),
    app=express();


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(__dirname+"/public"))

app.listen(5000||process.env.PORT,()=>{
    console.log("the server has started")
})