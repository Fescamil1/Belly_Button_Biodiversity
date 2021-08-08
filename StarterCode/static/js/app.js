// Initializes the page with a default plot
function init() {

    d3.json("samples.json").then(function (data) 
    {
      let data = data;
       console.log(data);   
   });

}
init();