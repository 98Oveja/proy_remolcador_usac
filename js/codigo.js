var velocidad_giro = document.getElementById('vel_giro');
var peso_material = document.getElementById('peso_mat');
var c = document.getElementById('caja');

var boton = document.getElementById('boton');

boton.addEventListener("click",calcular);

function calcular(){
    var da = 0.007;
    var db = 0.06;
    var dc = 0.04;
    var dd = 0.08;
    var gravedad = 9.81;

    var na = parseFloat(velocidad_giro.value);
    var m = parseFloat(peso_material.value)

    
    // calc velocidad en polea b
    var nb = (na*da)/db;
    //calc velocidad en polea c
    var nc = nb;
    //calc velocidad en polea d
    var nd = (nc*dc)/dd;
    //tension de la cuerda
    var t1 = m * gravedad;

    c.innerHTML = "RESULTADOS<br>";
    c.innerHTML += "Velocidad en Polea B: "+Number(nb.toFixed(2))+" m/s^2";
    c.innerHTML += "<br>";
    c.innerHTML += "Velocidad en Polea C: " + Number(nc.toFixed(2))+" m/s^2";
    c.innerHTML += "<br>";
    c.innerHTML += "Velocidad en Polea D: "+Number(nd.toFixed(2))+" m/s^2";
    c.innerHTML += "<br>";
    c.innerHTML += "Tensión de la cuerda: " + Number(t1.toFixed(2)) + " N";
}