 //this is a new function
 function myFunction() {
    alert("Welcome to my second button");
    window.location.href = "index.html";
  }
  function onLogin() {
    //Step1:Access the obj of input field
    var oUser = document.getElementById("userName");
    //Step2: get the value for the field
    var sUser = oUser.value;
    //step3: password field and value --Chaining
    var sPassword = document.getElementById("idPwd").value;
    //step4: Validate by using if
    if (sUser === sPassword) {
      document.write("Login Sucess");
    } else {
      // alert("Login Failed");
      //Access the msg element
      var oMsg = document.getElementById("idMsg");
      //Changing the dom at runtime
      oMsg.innerText="the credentials have been failed";
      oMsg.style.color="red";
      blinkMyMessage();


    }
  }
function blinkMyMessage(){
  $("#idMsg").fadeOut(1000,() =>{
    $("#idMsg").fadeIn(1000,() =>{
      blinkMyMessage();                       //Recursive function no blocking i/o 
    })
  })
}

  function showMagic() {
    //step1: get the obj of all the headers
    var aHeader = document.getElementsByClassName("Header");
    //step2: start loop
    for (let index = 0; index < aHeader.length; index++) {
      const element = aHeader[index];
      element.style.backgroundColor = "Green";
      element.style.color = "blue";
    }
  }
  function julia() {
    //calling jack
    setTimeout( 
    //maria-the callback syntax-1
    // function(){
    //   alert("The timer of 5s finished");
    // }, 
    //syntax-2
    () =>{
      alert("The timer of 5s finished");
      
    },
    5000
    );
  }
  function addNewContent(){
     //Step1: we can create a new element from DOM
     var oNewElement = document.createElement("h3");
     //step 2: create a textnode type element to hold texts
     var oTextNode = document.createTextNode(document.getElementById("userName").value);
     //step3 add textnode as child of new element
     oNewElement.appendChild(oTextNode);
     //step4 get object of dom element which on the page 
    var oCanvas = document.getElementById("canvas");
    //step5 insert newly created element inside canvas
    oCanvas.appendChild(oNewElement);

  }

  //JQuery functions code starts from here

  function showMagicJQ(){
    $(".Header").css("background-color","black").css("color","white");
  }
  function hide(){
    var flag=true;
    // $(".para").hide();
    $(".para").fadeOut(5000,() => {
      if (flag === true){
      alert("Hiding after 5 sec")       //this alert function will wait for 5 sec and then execute..sync function
      }
      flag=false;
    }
      );
    
  }
  function show(){
    // $(".para").show();
    $(".para").fadeIn(5000);
    alert("Showing on count of 5");   // this alert function won't wait as it is Asynchronous non blocking function
  }

  function enlarge(){
    $("img").animate({
      width:"+=260px",
      height: "+=260px"
    },() =>{
      // this-- current class obj(img), the obj here is the one on which above fun is applied
    $("img").animate({
        width:"-=200px",
        height:"-=200px"
    },() =>{
      enlarge();
    })
    //$("img").css("transform","rotateY(150deg)",)    
  
  
  });
  }
 function callCorona(){
  $.ajax("https://api.covidtracking.com/v1/us/daily.json",{
    success: function(data,status){
      // for (let i = 0; i < data.length; i++) {
      //   const element = data[i];  //for array data
      let element=data[0] // for single entry data
       addCoronoContent(element.date + "==>"+ element.hospitalized + "deaths==> " +element.death);
        
      // }
    }
  })
 }
 function addCoronoContent(sText){
  //Step1: we can create a new element from DOM
  var oNewElement = document.createElement("h3");
  //step 2: create a textnode type element to hold texts
  var oTextNode = document.createTextNode(sText);
  //step3 add textnode as child of new element
  oNewElement.appendChild(oTextNode);
  //step4 get object of dom element which on the page 
 var oCanvas = document.getElementById("canvas");
 //step5 insert newly created element inside canvas
 oCanvas.appendChild(oNewElement);

}
