function ecuacioncuadratica(){
    var a = document.getElementById('caj1').value;
    var b = document.getElementById('caj2').value;
    var c = document.getElementById('caj3').value;
    var x1 = document.getElementById('caj4').value;
    var x2 = document.getElementById('caj5').value;
    var d=((b*b)-4*a*c);
    var mostrar1;
    var mostrar2;
    
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    x1 = parseInt(x1);
    x2 = parseInt(x2);
    

    if(d==0){
    alert ("no existen soluciones reales");
    }
       else{
        x1=(-(b)+Math.sqrt((b*b)-(4*a*c)))/(2*a);
        x2=(-(b)-Math.sqrt((b*b)-(4*a*c)))/(2*a);   
        alert ("solucion 1"+x1+","+" solucion"+x2);
           mostrar1 =x1;
           mostrar2 =x2;
           mostrar1 = document.getElementById("caj4").value= x1;
           mostrar2 = document.getElementById("caj5").value= x2;
           document.getElementById("caj5").value=x2;
           return false;
    }
     }

