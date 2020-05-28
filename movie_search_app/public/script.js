
$(()=>{
    $("form").on("click",(e)=>{
        e.preventDefault()
        let search=$("#search_term").val()
        getmovie(search)
    })  
    
    function getmovie(search){
        axios.get("https://www.omdbapi.com/?s="+search+"&apikey=8310d38f")
        .then((response)=>{
           
            let data=response.data.Search
            let output=""
            for(var i=0;i<10;i++){
                output+=
                `
                   <div class-"col-lg-4">
                      <div>
                          <img src=${data[i].Poster}>
                      </div>
                      <div>
                         <p>
                            ${data[i].Title}
                         </p>
                      </div>
                   </div>
                `
            }
            console.log(output)
            document.querySelector("#movie").innerHTML=output
        })
        .catch((err)=>console.log(err))
    }
})
