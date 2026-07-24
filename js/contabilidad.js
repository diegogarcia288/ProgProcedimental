function ValidarInformacion() {
    let ventas = document.getElementById("Ventas").value;
    let fecha = document.getElementById("Fecha").value;
    let ingresos = document.getElementById("Ingresos").value;
    let egresos = document.getElementById("Egresos").value;
    let concepto = document.getElementById("Concepto").value;
    let valor = document.getElementById("Valor").value;


    if (!ventas || !fecha || !ingresos || !egresos || !concepto || !valor) {
        Swal.fire({
            title: "Error",
            text: "Hay Campos Incompletos",
            icon: "error"
        });
    }
    else {
        console.log(
            `Informacion del Producto: \n
            ${ventas} \n
            ${fecha} \n
            ${ingresos} \n
            ${egresos} \n
            ${concepto} \n
            ${valor} \n`);
        if (!/^\d+$/.test(ventas)) {
            Swal.fire({
                icon: "error",
                title: "Ventas debe contener números",
                showConfirmButton: false,
                timer: 1500
            });
        }
        if (!/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(fecha)) {
            Swal.fire({
                icon: "error",
                title: "Ingresos debe seguir formato dd/mm/aaaa",
                showConfirmButton: false,
                timer: 1500
            });
        }
        if (!/^\d+$/.test(ingresos)) {
            Swal.fire({
                icon: "error",
                title: "Ingresos debe contener números",
                showConfirmButton: false,
                timer: 1500
            });
        }
        if (!/^\d+$/.test(egresos)) {
            Swal.fire({
                icon: "error",
                title: "Engresos debe contener números",
                showConfirmButton: false,
                timer: 1500
            });
        }
        if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(concepto)) {
            Swal.fire({
                icon: "error",
                title: "Concepto debe contener texto",
                showConfirmButton: false,
                timer: 1500
            });
        }
        if (!/^\d+$/.test(valor)) {
            Swal.fire({
                icon: "error",
                title: "Valor debe contener números",
                showConfirmButton: false,
                timer: 1500
            });
        }
        Swal.fire({
                icon: "success",
                title: "Almacenado correctamente",
                showConfirmButton: false,
                timer: 1500
            });
        }

    }
// }

document.getElementById("guardar").onclick = ValidarInformacion;