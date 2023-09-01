sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function(Controller){
        return Controller.extend("tom.controller.View2",{
            //Constructor of my controller class
            onInit: function(){
                oView: this.getView();
                //Step1: create a brand new model object
                var oModel = new sap.ui.model.json.JSONModel();
                //Step 2: set or load data to the model
                oModel.setData({
                    "empStr":{
                        "empId":"10001",
                        "empName":"Shiva",
                        "salary":"100000",
                        "currency":"USD",
                        "smoker":true
                    },
                    
                    "empTab":[]
                });
                //Setting JSON model to one way binding as JSONmodel by default is two way
                //oModel.setDefaultBindingMode("OneWay");
                //step 3: make model aware to the application,view or controller
                sap.ui.getCore().setModel(oModel);

                // syntax 3 for property binding
                this.oView.byId("idEmpSal").bindValue("/empStr/salary");
                // syntax 4 for property binding
                this.oView.byId("idEmpCurr").bindProperty("value","/empStr/currency");
                this.oView.byId("idEmpSmk").bindProperty("state","/empStr/smoker");
            
            },
            // variableName: value
            //Global variable at controller class level
            
            empId:9099,
            onChange: function(){
                var oView = this.getView();
                debugger;
                //Access the field obj and change the value
                // this.oView.byId("idEmpId").setValue(this.empId);
                // oView.byId("idEmpName").setValue("Usha Devi");
                // this.oView.byId("idEmpSal").setValue("100000");
                // this.oView.byId("idEmpCurr").setValue("INR");
                // this.oView.byId("idEmpSmk").setValue("");

                //step 1: access the model object
                var oModel = sap.ui.getCore().getModel();
                //step 2: change the data in the model at runtime
                var jsonData=oModel.getProperty("/empStr");
                console.log(jsonData);
                oModel.setProperty("/empStr",{
                    "empId":"10002",
                        "empName":"Vijay",
                        "salary":"20000",
                        "currency":"INR",
                        "smoker":false
                })
            },


            
            
        });
});