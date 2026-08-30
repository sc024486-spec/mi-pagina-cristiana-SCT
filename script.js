
document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       TARJETAS - GIRAR
    ========================================= */

    document.addEventListener("click", function (e) {

        const boton = e.target.closest(".boton-voltear");

        if (!boton) return;

        const tarjeta = boton.closest(".tarjeta");

        if (!tarjeta) return;

        e.preventDefault();
        e.stopPropagation();

        tarjeta.classList.toggle("volteada");

    });


    /* =========================================
       COMPARTIR
    ========================================= */

    const botonCompartir =
        document.getElementById("botonCompartir");

    if (botonCompartir) {

        botonCompartir.addEventListener("click", async function () {

            const enlace =
                "https://l1nq.com/yllkfjx";

            const datos = {

                title: "Palabras de Dios",

                text:
                    "Te comparto esta página con versículos y reflexiones cristianas ❤️",

                url: enlace

            };

            if (navigator.share) {

                try {

                    await navigator.share(datos);

                } catch (error) {

                    console.log("Compartir cancelado");

                }

            } else {

                try {

                    await navigator.clipboard.writeText(enlace);

                    botonCompartir.innerHTML =
                        "✓ ¡Enlace copiado!";

                    setTimeout(function () {

                        botonCompartir.innerHTML =
                            "<span>↗</span> Compartir";

                    }, 2500);

                } catch (error) {

                    alert(
                        "Copia este enlace:\n\n" +
                        enlace
                    );

                }

            }

        });

    }
    

    /* =========================================
       PETICIÓN DE ORACIÓN
    ========================================= */

    const botonOracion =
        document.getElementById("botonOracion");

    const ventanaOracion =
        document.getElementById("ventanaOracion");

    const cerrarOracion =
        document.getElementById("cerrarOracion");


    if (botonOracion && ventanaOracion) {

        botonOracion.addEventListener("click", function () {

            ventanaOracion.classList.add("activa");

            document.body.style.overflow = "hidden";

        });

    }


    if (cerrarOracion && ventanaOracion) {

        cerrarOracion.addEventListener("click", function () {

            ventanaOracion.classList.remove("activa");

            document.body.style.overflow = "";

        });

    }



/* Cerrar tocando fuera del formulario */

if (ventanaOracion) {

    ventanaOracion.addEventListener("click", function (e) {

        if (e.target === ventanaOracion) {

            ventanaOracion.classList.remove("activa");

            document.body.style.overflow = "";

        }

    });

}

});

