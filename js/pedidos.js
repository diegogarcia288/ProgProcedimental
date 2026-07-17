function ValidarInformacion() {
    let cod_producto = document.getElementById("cod_pro").value;
    let producto = document.getElementById("producto").value;
    let direccion = document.getElementById("direccion").value;
    let user_name = document.getElementById("nom_user").value;
    let cantidad = document.getElementById("cant").value;
    let met_pago = document.getElementById("met_pago").value;
    let pago = document.getElementById("pago").value;
    let telefono = document.getElementById("telefono").value;


    if (!cod_producto || !producto || !direccion || !user_name|| !cantidad || !met_pago || !pago || !telefono) {
        Swal.fire({
            title: "Error",
            text: "Hay Campos Incompletos",
            icon: "error"
        });
    }
    else {
        console.log(
            `Informacion del Producto: \n
            ${cod_producto} \n
            ${producto} \n
            ${direccion} \n
            ${user_name} \n
            ${cantidad} \n
            ${met_pago} \n
            ${pago} \n
            ${telefono} \n`);
        if (!/^\d+$/.test(cod_producto)) {
            Swal.fire({
                icon: "error",
                title: "El código del producto debe contener números",
                showConfirmButton: false,
                timer: 1500
            });
        }
        if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(producto)) {
            Swal.fire({
                icon: "error",
                title: "El producto del producto debe contener texto",
                showConfirmButton: false,
                timer: 1500
            });
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(direccion)) {
            Swal.fire({
                icon: "error",
                title: "",
                showConfirmButton: false,
                timer: 1500
            });
        }
        if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(user_name)) {
            Swal.fire({
                icon: "error",
                title: "El nombre de usuario debe contener texto",
                showConfirmButton: false,
                timer: 1500
            });
        }
        if (!/^\d+$/.test(cantidad)) {
            Swal.fire({
                icon: "error",
                title: "La cantidad del producto debe contener solo números",
                showConfirmButton: false,
                timer: 1500
            });
        }
        if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(met_pago)) {
            Swal.fire({
                icon: "error",
                title: "El método de pago debe contener texto",
                showConfirmButton: false,
                timer: 1500
            });
        }
        if (!/^\d+$/.test(pago)) {
            Swal.fire({
                icon: "error",
                title: "El pago debe contener números",
                showConfirmButton: false,
                timer: 1500
            });
        }
        if (!/^\+?\d{1,3}[\s-]?\d{6,10}$/.test(telefono)) {
            Swal.fire({
                icon: "error",
                title: "El teléfono debe contener números",
                showConfirmButton: false,
                timer: 1500
            });
        }     

    }
}

document.getElementById("guardar").onclick = ValidarInformacion;