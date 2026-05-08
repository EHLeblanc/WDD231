var date=new Date();  
var day=date.getDate();  
var month=date.getMonth()+1;  
var year=date.getFullYear(); 
var hours=date.getHours();
var minutes=date.getMinutes();
var seconds=date.getSeconds();
document.write("<br>Last Updated: "+month+"/"+day+"/"+year+":"+hours+":"+minutes+":"+seconds); 