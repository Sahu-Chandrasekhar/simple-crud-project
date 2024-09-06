const con = require("..mysqlConfig");
 const app = require("../expressConfig");

const model ={
  segmentId:"",
  name:"",
  categoryId:"" 
}
app.use(express.json())

app.post("/add/segment",(req,res)=>{
    let data = req.body
    con.query('INsert INTO segment SET ?', data,(error,result,fields)=>{
        if(error) error;
        res.send(result)
    }) 
})