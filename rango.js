var texto = document.getElementById("rango_inferior");
var textodos = document.getElementById("rango_superior");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", elementos);

 function elementos()
 {
 	var rangoinf = parseInt(texto.value);
	var rangosup = parseInt(textodos.value);
	var arreglo = [];
	var i = 0;

	for (i = rangoinf; i <= rangosup; i++)
	{
		arreglo.push(i)
	}

	document.write ("<body style='background-color: #FADBD8;color: black;font-family: Helvetica;'>");
	document.write ("<h1> Elementos Contenidos en el Arreglo </h1>");
	document.write ("Los elementos contenidos en el arreglo de acuerdo a los rangos proporcionados son: " + arreglo);
 } 