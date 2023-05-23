//import {evalEspecialidad, evalProfecional} from './validate'
let btnBuscar = document.querySelector("#btnBuscar");
btnBuscar.addEventListener("click", buscar);

let btnNuevoTurno = document.querySelector('#btnNuevoTurno');
btnNuevoTurno.addEventListener("click", limpiar);

// let btnRegistrar = document.querySelector("#btnAgregar");
// btnRegistrar.addEventListener("click", agregar)



//funcion para boton buscar
function buscar() {
    
    //  evalEspecialidad();
    //  evalProfecional();
   // let e = document.getElementById("especialidad").value;(para obtener la especialidad/no lo use hasta no poder validar el campo con profecional)
    let nombre = document.getElementById("medicos").value;
    let especialidad = ""
    let dias = "";
    let horas = "";
    let oSocial = "";
    let texto1 = "";
    let consultorio = 0;
    
    switch (nombre) {

        case 'Miller María':
            especialidad = "clínica médica"
            dias = " Lunes, miércoles y viernes";
            horas = "8:00 a 14:00";
            oSocial = "Tiene convenio con obras sociales, consultar en administración ";
            consultorio = 5;
            break;
        case 'McAllister Ana':
            especialidad = "clínica médica"
            dias = " Lunes a viernes";
            horas = "8:00 a 12:00";
            oSocial = "Tiene convenio con obras sociales, consultar en administración ";
            consultorio = 1;
            break;
        case 'Adams Ana':
            especialidad = "pediatría"
            dias = " Lunes a viernes";
            horas = "8:00 a 12:00";
            oSocial = "No tiene convenio con ninguna obra social. Solo por reintegro";
            consultorio = 2;
            break;
        case 'Williams Luis':
            especialidad = "pediatría"
            dias = " martes y jueves";
            horas = "15:00 a 20:00";
            oSocial = "Tiene convenio con obras sociales, consultar en administración ";
            consultorio = 2;
            break;
        case 'Moore Carlos':
            especialidad = "ginecología"
            dias = "lunes, martes y jueves";
            horas = "15:00 a 20:00";
            oSocial = "Tiene convenio con obras sociales, consultar en administración ";
            consultorio = 3;
            break;
        case 'Wilson Juan':
            especialidad = "odontología"
            dias = "lunes, miércoles y jueves";
            horas = "08:00 a 13:00";
            oSocial = "No tiene convenio con ninguna obra social. Solo por reintegro";
            consultorio = 4;
            break; case 'Collins Mónica':
            especialidad = "nutrición"
            dias = "martes y jueves";
            horas = "8:00 a 15:00";
            oSocial = "Tiene convenio con obras sociales, consultar en administración ";
            consultorio = 6;
            break;
        case 'Taylor Juana':
            especialidad = "psicología"
            dias = "lunes, martes, miércoles y jueves";
            horas = "14:00 a 20:00";
            oSocial = "No tiene convenio con ninguna obra social. Solo por reintegro";
            consultorio = 6;
            break;
        case 'Evans Ana':
            especialidad = "cardiología"
            dias = " Lunes a viernes";
            horas = "16:00 a 20:00";
            oSocial = "Tiene convenio con obras sociales, consultar en administración ";
            consultorio = 1;
            break;

    }
    texto1 = `Ha seleccionado a ${nombre} especialista en ${especialidad}. Atiende: ${dias} en el horario de ${horas}`

    let texto2 = `${oSocial}.
    El tiempo aproximado de consulta es de 1 hora.
    Los turnos serán confirmados con 48 a 24 hs de anticipación a través de mensaje de mail.
     Chequear los datos ingresados correctamente.`

    document.querySelector('#texto1').innerHTML = texto1;
    document.querySelector('#texto2').innerHTML = texto2;
    document.getElementById("formulario").style.display = "";
    document.getElementById("boton").style.display = "";
    document.getElementById("consultorio").value = consultorio;

}
// funcion para boton nuevo turno
function limpiar() {
    document.querySelector('#texto1').innerHTML = "";
    document.querySelector('#texto2').innerHTML = "";
    document.getElementById("formulario").style.display = 'none';
    document.getElementById("boton").style.display = 'none';
    document.getElementById("consultorio").value = "";
    document.getElementById("medicos").value = "";
    document.getElementById("especialidad").value = "";
}


