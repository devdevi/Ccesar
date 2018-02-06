function principal2() {
  do {
    var respuesta = prompt('Indique el número de lo que desea hacer:  \n 1)cipher \n 2)decipher');
    if (respuesta !== '') {
      if (respuesta === '1') {
        cipher();
	  } else if (respuesta === '2') {
        decipher();
      } else {
        alert('Ingrese una opción válida');
      }
    }
  } while (respuesta === '' || (respuesta !== '1' && respuesta !== '2'));


  function cipher() { 
    var use = false;
    do { 
      var frase = prompt('ingresa una frase');
 	  var upperC = frase.toUpperCase();
 	  for (i = 0; i < upperC.length; i++) {
 		if (typeof upperC[i] === 'number' || upperC[i] === '') {
 			use = true;
 			alert('Ingrese un texto sin numeros y sin espacios Vacios');
		    break;
 		} 
      }
    } while (use === true);
    // crea una string vacio para poner el texto cifrado.
    var cifrado = '';
    for (var i = 0; i < upperC.length; i ++) { // itera el str definido y mientras itera 
	  // Le pido que vaya cifrando cada caracter y lo envie a cifrado.
		  var indxLetras = upperC[i]; { // indice iterador formula 
			  var ascii = upperC.charCodeAt(i);// CODIGO ASCII
        indxLetras = String.fromCharCode(((ascii - 65 + 33) % 26) + 65);	}// formula de cifrado..

	  	cifrado += indxLetras; // agregar las letras cifradas a la variable cifrado 
    }
	
    alert(' Tu frase  ' + (upperC) + ' encriptada es ' + (cifrado)); // Retornar texto cifrado.
  }
  function decipher() {
    var use = false;
    do { 
      var frase = prompt('ingresa una frase');
 	  var upperC = frase.toUpperCase();
 	  for (i = 0; i < upperC.length; i++) {
 		    if (typeof upperC[i] === 'number' || upperC[i] === ' ') {
 			      use = true;
 			alert('Ingrese un texto sin numeros y sin espacios Vacios');
		    break;
 		      }
    	}
	  } while (use === true);
  	var descifrado = '';
	  for (var i = 0; i < upperC.length; i ++) {
      var indxLetras = upperC[i]; { 
        var ascii = upperC.charCodeAt(i);
        indxLetras = String.fromCharCode(((ascii + 65 - 33) % 26) + 65);	
      }
      descifrado += indxLetras; 
    }
    alert(' Tu frase ' + (upperC) + ' descifrada es ' + (descifrado));
  }
};
principal2();
