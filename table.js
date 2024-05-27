mytable();
function mytable(number){
    var rang=prompt("enter you table value");
    document.write("tableof"+rang+"<br>"+ "<br>")
    for (var i=1;i<=10;i++){
        var result=rang*i;
        document.write(rang+"x"+i+"="+result+"<br>");
    };
    }