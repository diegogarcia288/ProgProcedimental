function ValidarInformacion() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let tipo_doc = document.getElementById("tip_doc").value;
    let num_doc = document.getElementById("num_doc").value;
    let telefono = document.getElementById("tel").value;
    let email = document.getElementById("email").value;
    let genero = document.getElementById("gen").value;
    let cargo = document.getElementById("cargo").value;
    let nacimiento = document.getElementById("nacimiento").value;
    let contrasena = document.getElementById("cont").value;


    if (!nombre || !apellido || !tipo_doc || !num_doc || !telefono || !email || !genero || !cargo || !nacimiento || !contrasena) {
        Swal.fire({
            title: "Error",
            text: "Hay Campos Incompletos",
            icon: "error"
        });
    }
    else {
        console.log(
            `Informacion del Producto: \n
            ${nombre} \n
            ${apellido} \n
            ${tipo_doc} \n
            ${num_doc} \n
            ${telefono} \n
            ${email} \n
            ${genero} \n
            ${cargo}
            ${nacimiento}
            ${contrasena} \n`);
        if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(nombre)) {
            Swal.fire({
                icon: "error",
                title: "El nombre debe contener texto",
                showConfirmButton: false,
                timer: 1500
            });
        }
        if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(apellido)) {
            Swal.fire({
                icon: "error",
                title: "El apellido debe contener texto",
                showConfirmButton: false,
                timer: 1500
            });
        }
        if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(tipo_doc)) {
            Swal.fire({
                icon: "error",
                title: "",
                showConfirmButton: false,
                timer: 1500
            });
        }
        if (!/^\d+$/.test(num_doc)) {
            Swal.fire({
                icon: "error",
                title: "El número de documento debe contener números",
                showConfirmButton: false,
                timer: 1500
            });
        }
        if (!/^\+?\d{1,3}[\s-]?\d{6,10}$/.test(telefono)) {
            Swal.fire({
                icon: "error",
                title: "El teléfono debe contener solo números",
                showConfirmButton: false,
                timer: 1500
            });
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            Swal.fire({
                icon: "error",
                title: "Digite un Email válido",
                showConfirmButton: false,
                timer: 1500
            });
        }
        if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(genero)) {
            Swal.fire({
                icon: "error",
                title: "Debe completar campo",
                showConfirmButton: false,
                timer: 1500
            });
        }
        if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(cargo)) {
            Swal.fire({
                icon: "error",
                title: "Describir el cargo solo necesita números",
                showConfirmButton: false,
                timer: 1500
            });
        }
                if (!/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(nacimiento)) {
            Swal.fire({
                icon: "error",
                title: "Introduzca una fecha válida",
                showConfirmButton: false,
                timer: 1500
            });
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(contrasena)) {
            Swal.fire({
                icon: "error",
                title: "Digite una contraseña válida",
                showConfirmButton: false,
                timer: 1500
            });
        }     

    }
}

document.getElementById("guardar").onclick = ValidarInformacion;