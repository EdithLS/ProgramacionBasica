var texto = document.getElementById("texto_lineas");
var textodos = document.getElementById("texto_lineas_dos");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", tablaPorClick);

 function tablaPorClick()
{
	var columnas = parseInt(texto.value);
	var filas = parseInt(textodos.value);
	var i = 0;
	var j = 0;

	document.write("<table style='background-color: #AAAAFF;color: white;font-family: Helvetica;'>")
	for (i = 0; i < filas; i++)
 	{
 		document.write("<tr>")
 		for (j = 0; j < columnas; j++)
 		{
 			document.write("<th style='border: 3px solid #8145A8;text-align: left;padding: 8px;'>")
 			document.write("Fila: "+ i + " Columna: " + j)
 			document.write("</th>")
 		}
 		document.write("</tr>")
 	}
 	document.write("</table>")

} 