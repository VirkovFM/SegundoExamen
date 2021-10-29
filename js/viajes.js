var nombre;
var mail;
var tel;
var kilo;
var des;
var day;
var kid;
var adult;
var img;

$(document).ready(function () {

  
    // Recorrer el JSON para enviar al index.HTML


    // <div><label class="labelnre">Nombre: ${localStorage.getItem("nombre")}</label>
    // <label class="labelnre">Destino: ${localStorage.getItem("destino")}</label>
    // <label class="labelnre">Nume. dias: ${localStorage.getItem("dias")}</label>
    // <label class="labelnre">Num. Niños: ${localStorage.getItem("nn")}</label>
    // <label class="labelnre">Num. Adultos: ${localStorage.getItem("na")}</label>
    // <label id="total" class="labelnre">Total: ${localStorage.getItem("total")}</label></div>
      var ticket = `
    <form action="" class="formu">
    <h1 class="ti">Factura</h1><img id="lugari" src="${localStorage.getItem("imagen")}">
    </form>
    <table width="230" id="tabla">
    <tr>
    <td class="columna">Nombre.</td>
    <td class="columna">${localStorage.getItem("nombre")}</td>
    </tr>
    <tr>
    <td>Destino.</td>
    <td>${localStorage.getItem("destino")}</td>
    </tr>
    <tr>
    <td>Num. días.</td>
    <td>${localStorage.getItem("dias")}</td>
    </tr>
    <tr>
    <td>Num. adultos.</td>
    <td>${localStorage.getItem("na")}</td>
    </tr>
    <tr>
    <td>num niños.</td>
    <td>${localStorage.getItem("nn")}</td>
    </tr>
    </table>
    <label id="total" class="labelnre">Total: ${localStorage.getItem("total")}</label></div>


    `;
      
      $("#ticket").append(ticket);
    ;
});




function validar(forma){
    var name=forma.nombre;
    nombre=name;

    if(name.value==""){
        alert("Debe proporcionar un nombre");
        name.focus();   //para que posicione el curos en el elemento
        name.select();  //selecciona todo el texto del input
        return false;
    }
    mail=forma.email;
    if(mail.value==""){
        alert("debe proporcionar un correo")
        mail.focus();
        mail.select();
        return false;
    }
    tel= forma.telefono;
    if(tel.value=="" || tel.value.length<10){
    alert("debe proporcionar un telefono (10 digitos)")
    tel.focus();
    tel.select();
    return false;
}
    kilo;
    des=forma.destino.value;

if(des=='Guanajuato'){
       kilo=67*150;
       img="img/lugar/gto.jpg";
     }
     else if(des=='Aguascalientes'){
         kilo=124*150;
         img="img/lugar/aguas.jpg";
     }
     else if(des=='Baja california'){
         kilo=2324*150;
         img="img/lugar/bcalifornia.jpg";
     }
     else if(des=='Baja california sur'){
         kilo=3655*150;
         img="img/lugar/bcs.jpg";
     }
     else if(des=='Campeche'){
         kilo=1504*150;
         img="img/lugar/cam.jpg";
     }
     else if(des=='Chiapas'){
         kilo=1199*150;
         img="img/lugar/chi.jpg";
     }
     else if(des=='Chihuahua'){
         kilo=1082*150;
         img="img/lugar/chiu.jpg";
     }
     else if(des=='Coahuila'){
         kilo=636*150;
         img="img/lugar/coa.jpg";
     }
     else if(des=='Colima'){
         kilo=415*150;
         img="img/lugar/col.jpg";
     }
     else if(des=='Durango'){
         kilo=545*150;
         img="img/lugar/dura.jpg";
     }
     else if(des=='Guerrero'){
         kilo=1254*150;
         img="img/lugar/gue.jpg";
     }
     else if(des=='Hidalgo'){
         kilo=274*150;
         img="img/lugar/hidal.jpg";
     }
     else if(des=='Jalisco'){
         kilo=223*150;
         img="img/lugar/ja.jpg";
     }
     else if(des=='Estado de mexico'){
         kilo=384*150;
         img="img/lugar/esme.jpg";
     }
     else if(des=='Michoacan'){
         kilo=201*150;
         img="img/lugar/micho.jpg";
     }
     else if(des=='Morelos'){
         kilo=310*150;
         img="img/lugar/more.jpg";
     }
     else if(des=='Nayarit'){
         kilo=466*150;
         img="img/lugar/naya.jpg";
     }
     else if(des=='Nuevo leon'){
         kilo=702*150;
         img="img/lugar/nl.jpg";
     }
     else if(des=='Oaxaca'){
         kilo=829*150;
         img="img/lugar/oa.jpg";
     }
     else if(des=='Puebla'){
         kilo=500*150;
         img="img/lugar/pue.jpg";
     }
     else if(des=='Queretaro'){
         kilo=175*150;
         img="img/lugar/que.jpg";
     }
     else if(des=='Quintana roo'){
         kilo=1785*150;
         img="img/lugar/quin.jpg";
     }
     else if(des=='San luis potosi'){
         kilo=203*150;
         img="img/lugar/san.jpg";
     }
     else if(des=='Sinaloa'){
         kilo=1106*150;
         img="img/lugar/sina.jpg";
     }
     else if(des=='Sonora'){
         kilo=1617*150;
         img="img/lugar/sono.jpg";
     }
     else if(des=='Tabasco'){
         kilo=209*150;
         img="img/lugar/taba.jpg";
     }
     else if(des=='Tamaulipas'){
         kilo=521*150;
         img="img/lugar/tama.jpg";
     }
     else if(des=='Tlaxcala'){
         kilo=479*150;
         img="img/lugar/tlax.jpg";
     }
     else if(des=='Veracruz'){
         kilo=738*150;
         img="img/lugar/vera.jpg";
     }
     else if(des=='Yucatan'){
         kilo=1675*150;
         img="img/lugar/yuca.jpg";
     }
     else if(des=='Zacatecas'){
         kilo=247*150;
         img="img/lugar/zaca.jpg";
     }
/////////////////////////////////////////////
    day=forma.dias;
    if(day.value=="" || Math.sign(day.value)==-1 || day.value==0){
        alert("debe inresar un numero valido de dias");
        day.focus();
        day.select();
        return false;
    }
    kid=forma.nn;
    if(kid.value=="" || Math.sign(kid.value)==-1){
        alert("debe inresar un numero valido niños (De 0 en adelante)");
        kid.focus();
        kid.select();
        return false;
    }
    adult=forma.na;
    if(adult.value=="" || Math.sign(adult.value)==-1 || adult.value==0){
        alert("un viaje debe de tener minimo un adulto");
        adult.focus();
        adult.select();
        return false;
    }


    let f_name = nombre.value;
    localStorage.setItem("nombre", f_name);
    // let f_kilo = (kilo+(kid.value*50)+(adult.value*100));
    let f_kilo = (kilo+(kid.value*50*day.value)+(adult.value*100*day.value));
    localStorage.setItem("total", f_kilo);
    let f_des = des;
    localStorage.setItem("destino", f_des);
    let f_day = day.value;
    localStorage.setItem("dias", f_day);
    let f_kid = kid.value;
    localStorage.setItem("nn", f_kid);
    let f_adult = adult.value;
    localStorage.setItem("na", f_adult);
    let f_img = img;
    localStorage.setItem("imagen", f_img);



}
$("#formulario form").submit(function () {
    
    //alert(form_name);
    // console.log(form_name);
    
    
    ;
    
    
    
  });

  var form_name = localStorage.getItem("form_name");
  var form_kilo = localStorage.getItem("form_kilo");
  var form_des = localStorage.getItem("form_des");
  var form_day = localStorage.getItem("form_day");
  var form_kid = localStorage.getItem("form_kid");
  var form_adult = localStorage.getItem("form_adult");
