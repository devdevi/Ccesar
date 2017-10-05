function principal2(){
 do{
		var respuesta = prompt('Indique el número de lo que desea hacer: 1)cipher - 2)decipher');
		if(respuesta !==''){
			if(respuesta == '1') {
				cipher();
			} else if (respuesta == '2') {
				decipher();
			} else {
				alert("Ingrese una opción válida");
			}
		}
	} while (respuesta === ''|| (respuesta !== '1' && respuesta !== '2'));
}

function cipher() { 
	var u = false;
  do{ 

 	var frase =prompt('ingresa una frase');
 	var a = frase.toUpperCase();
 	for (i=0;i<a.length;i++){
 		if (typeof a[i]==='number' || a[i]===' '){
 			u = true
 			alert('Ingrese un texto sin numeros y sin espacios Vacios');
		    break;
		} 
	}
	}while( u === true);
    // crea una string vacio para poner el texto cifrado.
	var cifrado = '';
	for (var i = 0; i < a.length; i ++) {//itera el str definido y mientras itera 
	//Le pido que vaya cifrando cada caracter y lo envie a cifrado.
		var indxLetras= a[i]; {//indice iterador formula 
			var ascii = a.charCodeAt(i);//CODIGO ASCII
				indxLetras = String.fromCharCode(((ascii - 65 + 33 ) % 26) + 65);	}//formula de cifrado..

	  	cifrado += indxLetras; //agregar las letras cifradas a la variable cifrado 
	}
	
	alert (' Tu frase  ' + (a) +' encriptada es '+(cifrado));//Retornar texto cifrado.
	
}




function decipher(){
	var u = false;
  do{ 

 	var frase =prompt('ingresa una frase');
 	var a = frase.toUpperCase();
 	for (i=0;i<a.length;i++){
 		if (typeof a[i]==='number' || a[i]===' '){
 			u = true
 			alert('Ingrese un texto sin numeros y sin espacios Vacios');
		    break;
		} 
	}
	}while( u === true);
  	var descifrado = '';
	for (var i = 0; i < a.length; i ++) {
		var indxLetras= a[i]; { 
			var ascii = a.charCodeAt(i);
				indxLetras = String.fromCharCode(((ascii + 65 - 33 ) % 26) + 65);	}

				descifrado += indxLetras; 
			}
			alert(' Tu frase ' + (a) +' descifrada es '+(descifrado));
	
}


principal2();