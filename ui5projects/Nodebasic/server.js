const express = require('express')
const app = express()
// if there are n no. of modules/pages we can retrive in one go
app.use(express.static('webapp'));
//if we want to get the data present by url /usha
app.get('/usha', function (req, res) {
  res.send([{
    empID: 1001,
    empName: "Shivamani",
    salary: 10000,
    currency: "EUR",
    smoker: false,
  },
  {
    empID: 1002,
    empName: "Usha",
    salary: 1000000,
    currency: "EUR",
    smoker: false,
  }])
})
// for retriving a file present within system by giving path
app.get("/toi",function(req,res){
    res.sendFile(__dirname +"/webapp/toi.html");
})
app.listen(3000)
console.log("Server is running at 3000")