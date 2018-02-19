function Validar(){
    var fecha = new Date();
    var AnioActual = fecha.getFullYear();
    var edad, comision, recargo=0,recargoCony=0,recargoHijo=0, totalPagar=0.00;
    const preciobase=250;
    comision=preciobase*0.30:
    var nomb = document.frmDatos.nombre.value;
    var dia=document.frmDatos.DiaNacimiento.value;
    var mes=document.frmDatos.MesNacimiento.value;
    var anio=document.frmDatos.ANacimeinto.value;

    if(nomb.value==null){
        alert("Ingrese Nombre completo");
        return false;
    }if(dia.value==null){
        alert("Ingrese Dia de Nacimiento");
        return false;
    }if(mes.value==null){
        alert("Ingrese Mes de Nacimiento");
        return false;
    }if(anio.value==null){
        alert("Ingrese Año de Nacimiento");
        return false;
    }


    edad=AnioActual-anio;
//evaluar recargos par la edad del cliente
    if (edad<18){
      alert("No se puede asegurar");
    }
    else if (edad>=18 && edad<21){
      recargo=0.00;
    }
    else if (edad>=21 && edad<25){
      recargo=preciobase*0.01;
    }
    else if (edad>=25 && edad<30){
      recargo=preciobase*0.02;
    }
    else if (edad>=30 && edad<40){
      recargo=preciobase*0.05;
    }
    else if (edad>=40 && edad<50){
      recargo=preciobase*0.08;
    }
    else if (edad>=50 && edad<65){
      recargo=preciobase*0.12;
    }
    else if(edad>=65){
      alert("No se puede asegurar");
    }

//evaluar recargos si tiene conyugue y por edad
    if (document.frmDatos.conyugue[0].checked){
      var edadConyugue=document.frmDatos.edadConyugue.value;
      if (edadConyugue<30){
        recargoCony=preciobase*0.01;
      }
      else if (edadConyugue>=30 && edadConyugue<40) {
        recargoCony=preciobase*0.02;
      }else if (edadConyugue>=40 && edadConyugue<50) {
        recargoCony=preciobase*0.03;
      }
      else if (edadConyugue>=50 && edadConyugue<70) {
          recargoCony=preciobase*0.05;
      }
    }

    if (document.frmDatos.hijos[0].checked){
      cantidadHijos = document.frmDatos.cantidadHijos.value;
      recargoHijo=(preciobase*0.01)*cantidadHijos;
    }


    totalPagar=comision+recargo+recargoCony+recargoHijo;
    document.write("Nombre cliente: " + nomb);
    document.write("Recargo por edad: " +recargo);
    document.write("Recargo por Conyugue: "+recargoCony);
    document.write("Recargo por hijos: "+ recargoHijo);
    document.write("El total a pagar: " +totalPagar);
    return true;
}
