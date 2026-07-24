function ValidarInformacion() {
    let cod_pro = document.getElementById("cod_prod").value;
    let nom_pro = document.getElementById("nom_pro").value;
    let cant_pro = document.getElementById("cant_pro").value;
    let desc_pro = document.getElementById("desc_pro").value;
    let marca_pro = document.getElementById("marca_pro").value;
    let valor_uni = document.getElementById("valor_uni").value;
    let cate_product = document.getElementById("cate_product").value;
    let ubi_product = document.getElementById("ubi_product").value;


    if (!cod_prod || !nom_pro || !cant_pro || !desc_pro || !marca_pro || !valor_uni || !cate_product || !ubi_product) {
        Swal.fire({
            title: "Error",
            text: "Hay Campos Incompletos",
            icon: "error"
        });
    }
    else {
        console.log(
            `Informacion del Producto: \n
            ${cod_pro} \n
            ${nom_pro} \n
            ${cant_pro} \n
            ${desc_pro} \n
            ${marca_pro} \n
            ${valor_uni} \n
            ${cate_product} \n
            ${ubi_product} \n`);
        if (!/^\d+$/.test(cod_pro)) {
            Swal.fire({
                icon: "error",
                title: "El código del producto debe contener números",
                showConfirmButton: false,
                timer: 1500
            });
        }
        if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(nom_pro)) {
            Swal.fire({
                icon: "error",
                title: "El nombre del producto debe ser con letras",
                showConfirmButton: false,
                timer: 1500
            });
        }
        if (!/^\d+$/.test(cant_pro)) {
            Swal.fire({
                icon: "error",
                title: "La cantidad del producto debe contener números",
                showConfirmButton: false,
                timer: 1500
            });
        }
        if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(desc_pro)) {
            Swal.fire({
                icon: "error",
                title: "La descripción del producto debe contener texto",
                showConfirmButton: false,
                timer: 1500
            });
        }
        if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(marca_pro)) {
            Swal.fire({
                icon: "error",
                title: "La marca del producto debe contener texto",
                showConfirmButton: false,
                timer: 1500
            });
        }
        if (!/^\d+$/.test(valor_uni)) {
            Swal.fire({
                icon: "error",
                title: "Valor unitario debe contener números",
                showConfirmButton: false,
                timer: 1500
            });
        }
        if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(cate_product)) {
            Swal.fire({
                icon: "error",
                title: "La categoráa del producto debe contener texto",
                showConfirmButton: false,
                timer: 1500
            });
        }
        if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(ubi_product)) {
            Swal.fire({
                icon: "error",
                title: "La ubicación del producto debe contener números",
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

document.getElementById("guardar").onclick = ValidarInformacion;