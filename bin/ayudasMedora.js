// JavaScript Document
function cargaPrimerosValores(opcion, arrValores) {
  arrValores = arrValores.arrayAyudas;
  var texto = "";
  var colorFondo = '';
  var contador = 0;
  var linea = "";
  $("#div_tabla").append("<table id='idTablaTextos' class='table table-hover'>");
  linea = "<tr><td><p id='texto_" + contador + "' class='lead ' >" + texto + "</p></td>"
    + "<td><button class='py-1' id='btn_" + contador + "' >Reset</button></td></tr>";
  contador++;
  $("#idTablaTextos").append(linea);
  var hayFilas = arrValores.length;
  for (var i = 0; i < hayFilas; i++) {
    var ambito = arrValores[i].ambito;
     texto = arrValores[i].texto;


    linea = "<tr><td><p id='texto_" + contador + "' class='lead " + colorFondo + "' >" + texto + "</p></td>"
     // + "<td><button class='py-1' id='btn_" + contador + "' >Copiar</button></td></tr>";
	  
	 + "<td><img src='img/copiar.png' width='30' height='30' title='copia texto' id='btn_" + contador + "' /></td></tr>";
    if (ambito == opcion) {
      $("#idTablaTextos").append(linea);
      contador++;
    }
  }
  $("#div_tabla").append("</table>");
  //$("#idTablaTextos").append("</table>");
}
//////////////////////////////////////////////////////////////////////////
function ModificaTextos(opcion, arrValores) {
  arrValores = arrValores.arrayAyudas;
  var hayFilas = arrValores.length;
  var contador = 1;
  for (var i = 0; i < hayFilas; i++) {
    var ambito = arrValores[i].ambito;
    var texto = arrValores[i].texto;
    if (ambito == opcion) {
      var objeto = "#texto_" + contador
      $(objeto).html(texto);
      contador++;
    }

  }
}



function copiaTexto(objetoBtn) {
  var cuentaLongitud=objetoBtn.length;
  var objetoTexto='';
	if (cuentaLongitud==5)
  		 objetoTexto = "#texto" + objetoBtn.substr(3, 2);
	else
		objetoTexto = "#texto" + objetoBtn.substr(3, 3);
  var textoCopiado = $(objetoTexto).text();
  $("#textoCopiado").val(textoCopiado);
  var $bridge = $("<input>")
  $("body").append($bridge);
  $bridge.val($(objetoTexto).text()).select();
  document.execCommand("copy");
  $bridge.remove();

  return textoCopiado;
}
//////////////////////////////////////////////////////////// I N I C I O 
$(document).ready(function () {
 
  var arrValores = dameArrayDeValores();
  cargaPrimerosValores('cirugiaMenor', arrValores);
 

  $("img[id^='btn_']").click(function () {
    var textoCopiado = copiaTexto(this.id);

  });
    
  $("input[name^='entornoCheck']").click(function () {
        var id=this.id;
        var valor=$("#"+id).val();
        ModificaTextos(valor, arrValores);
  });

});
