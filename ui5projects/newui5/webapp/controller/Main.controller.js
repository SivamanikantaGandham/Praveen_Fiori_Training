sap.ui.define(
    ["sap/ui/core/mvc/Controller","tom/model/model"],
    function(Controller,model){
        return Controller.extend("tom.controller.Main",{
            //Constructor of my controller class
            onInit: function(){
                console.log("Here is my controller constructor");
            },
            

            //My custom Controller class
            superman: function(){
                //Step1: get the obj of running appliction
                var oCore = sap.ui.getCore();
                //step2: get the obj of input field
                var oField = oCore.byId("idInput");
                //step3: get the value of input field ---> check value property in Input
                var sVal = oField.getValue();
                //step4: print the value
                alert(sVal);
                //Or we can do like below using chaining
                 //alert(sap.ui.getCore().byId("idInput").getValue());
            
               // alert(sap.ui.getCore().byId("idInput").getValue());
                alert("Welcome to custom controller Superman button");
            },
            newFunction:function(){
                //debugger;
                //option 1: using get core
                //var oFld = sap.ui.getCore().byId("View1--idField");
                //option2: using the view object
                var oFld = this.getView().byId("idField");
                alert(oFld.getValue());
            }
            
        });
});