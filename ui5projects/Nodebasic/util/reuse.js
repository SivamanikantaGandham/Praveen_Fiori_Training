//Module or package or class
module.exports = {

    printArray : function(arrFruits){
        for(var i=0;i<arrFruits.length;i++){
            var item=arrFruits[i];
            console.log(item);
            } 
    },
    printJSON : function(oEmp){
        for(key in oEmp){
            console.log(key + "===>" + oEmp[key]);
        }
    } 

}