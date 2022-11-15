// JavaScript Document
function generaTABLA() {
  var titulo = "<tr><td>NºHistoria</td><td>NOMBRE</td><td>SOLICITADO</td><td>RESULTADO</td></tr>";
  $("#idTabla").append(titulo);
  for (var i = 0; i < 15; i++) {
    var fila = "<tr><td></td><td></td><td></td><td></td></tr>";
    $("#idTabla").append(fila);
  }

}

function ejemploParaAprender()
{
    var doc = new jsPDF('l')
	var texto="hola"
  var body = [
               [1, 'GIZMORE Multimedia Speaker with Remote Control, Black,Lorem Ipsum is simply dummy...', 75000, '2021'],
               [2, 'Realme', 25000, '2022'],
               [3, 'Oneplus', 30000, '2021'],
               ]
    // New Header and Footer Data Include the table
    var y = 10;
    doc.setLineWidth(2);
    doc.text(200, y = y + 30, texto);
    doc.autoTable({
        body: body,
        startY: 70,
        head:[['SL.No', 'Product Name', 'Price', 'Model']],
        headStyles :{lineWidth: 1,fillColor: [30, 212, 145],textColor: [255,255,255],
            },
        theme: 'grid',
        columnStyles: {
            0: {
                halign: 'right',
                cellWidth: 30,
                fillColor: [232, 252, 245],
               },
            1: {
                halign: 'left',
                cellWidth: 80,
                fillColor: [232, 252, 245],
               },
            2: {
                halign: 'right',
                cellWidth: 50,
                fillColor: [232, 252, 245],
               },
            3: {
                halign: 'right',
                cellWidth: 50,
                fillColor: [232, 252, 245],
               }
        },
       })
       // save the data to this file
 doc.save('ControlHeces.pdf')
}


function generaAutoTableHECES()
{
    var doc = new jsPDF('l')
  doc.autoTable({
    html: '.table',
    tableWidth: 'wrap',
    styles: { cellPadding: 0.5, fontSize: 8 },
  })
	var due=$("#due").val();
		doc.text(20,10,'CRIBADO COLORECTAL DEL PROFESIONAL:'+due);
      doc.autoTable({
    //startY: finalY + 20,
          theme: 'grid',
    head: [['Ord.','HISTORIA', 'NOMBRE                                                           ', 'SOLICITADO', 'RESULTADOS', 'OBSERVACION']],
    body: [
        ['1','', '', '', '', ''],
        ['2','', '', '', '', ''],
        ['3','', '', '', '', ''],
        ['4','', '', '', '', ''],
        ['5','', '', '', '', ''],
        ['6','', '', '', '', ''],
        ['7','', '', '', '', ''],
        ['8','', '', '', '', ''],
        ['9','', '', '', '', ''],
        ['10','', '', '', '', ''],
        ['11','', '', '', '', ''],
        ['12','', '', '', '', ''],
        ['13','', '', '', '', ''],
        ['14','', '', '', '', ''],
        ['15','', '', '', '', ''],
        ['16','', '', '', '', ''],
        ['17','', '', '', '', ''],
        ['18','', '', '', '', ''],
        ['19','', '', '', '', ''],
        ['20','', '', '', '', ''],
    ],
  })

doc.save('ControlHeces.pdf')
}


function generaAutoTableSENSOR()
{
    var doc = new jsPDF('l')
	var paciente1=$("#paciente1").val();
	var paciente2=$("#paciente2").val();
	var paciente3=$("#paciente3").val();
	var paciente4=$("#paciente4").val();
	var paciente5=$("#paciente5").val();
	var paciente6=$("#paciente6").val();
	var paciente7=$("#paciente7").val();
	var paciente8=$("#paciente8").val();
	var paciente9=$("#paciente9").val();
	var paciente10=$("#paciente10").val();
	var paciente11=$("#paciente11").val();
	var paciente12=$("#paciente12").val();
	
    doc.text(20,10,' CONTROL DE SENSORES DEL AÑO 2022');
  doc.autoTable({
    html: '.table',
    tableWidth: 'wrap',
    styles: { cellPadding: 0.5, fontSize: 8 },
    headStyles :{lineWidth: 1,fillColor: [30, 212, 145],textColor: [255,255,255],},  
  })
      doc.autoTable({
    //startY: finalY + 20,
          theme: 'grid',
    head: [['Ord.','PACIENTE', 'ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC']],
    body: [
        ['1', paciente1, '', '', '', '', '', '', '', '', '', '', '', ''],
        ['2', paciente2, '', '', '', '', '', '', '', '', '', '', ''],
        ['3', paciente3, '', '', '', '', '', '', '', '', '', '', ''],
        ['4', paciente4, '', '', '', '', '', '', '', '', '', '', ''],
        ['5', paciente5, '', '', '', '', '', '', '', '', '', '', ''],
        ['6', paciente6, '', '', '', '', '', '', '', '', '', '', ''],
        ['7', paciente7, '', '', '', '', '', '', '', '', '', '', ''],
        ['8', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['9', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['10', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['11', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['12', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['13', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['14', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['15', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['16', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['17', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['18', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['19', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['20', '', '', '', '', '', '', '', '', '', '', '', ''],
    ],
  })

doc.save('ControlSensor.pdf')
}


function generaPDF(valorPulsado) {
  var obj_jsPDF = null;
  if (valorPulsado == 'HECES') obj_jsPDF = new jsPDF('l'); // horizontal
  else
    obj_jsPDF = new jsPDF('p'); //vertical
    obj_jsPDF.autotable();
 
  if (valorPulsado == 'HECES') generaTABLA();
  var elementHTML = $('#contenidoPDF').html();
  var specialElementHandlers = {
    '#elementH': function (element, renderer) {
      return true;
    }
  };
  obj_jsPDF.fromHTML(elementHTML, 15, 15, {
    'width': 170,
    'elementHandlers': specialElementHandlers
  });

  // Save the PDF
  obj_jsPDF.save('sample-document.pdf');
}


//////////////////////////////////////////////
$(document).ready(function () {

  $("[id^=id_pdf]").click(function () {
    var btn = "#" + this.id;
    var valorPulsado = $(btn).val();
    if (valorPulsado=='PDF') generaAutoTableHECES()
    if (valorPulsado=='SENSOR') generaAutoTableSENSOR()  
      
  })

});
