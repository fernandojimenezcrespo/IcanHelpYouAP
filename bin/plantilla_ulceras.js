
function copiaTexto(objetoBtn) {
   var objetoTexto='';
    var kk=$("#alergias").val();
    objetoTexto='#'+ objetoBtn.replace('cp_','');
     
  var textoCopiado = $(objetoTexto).val();
  $("#textoCopiado").val(textoCopiado);
  var $bridge = $("<input>")
  $("body").append($bridge);
  $bridge.val($(objetoTexto).val()).select();
  document.execCommand("copy");
  $bridge.remove();

  return textoCopiado;
}
//////////////////////////////////////////////////////////// I N I C I O 
$(document).ready(function () {
     $("img[id^='cp_']").click(function () {
    var textoCopiado = copiaTexto(this.id);
        $("#textoCopiado").val(textoCopiado); 
  });
  
});
