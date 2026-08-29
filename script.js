document.addEventListener("DOMContentLoaded", function () {

    const botonEntrar = document.getElementById("entrar");
    const entrada = document.getElementById("entrada");
    const pagina = document.getElementById("pagina");

    /* =========================================
       ENTRAR
    ========================================= */

    botonEntrar.addEventListener("click", function () {

        // Evitar que se pueda pulsar varias veces
        botonEntrar.disabled = true;

        // Abrir las puertas
        entrada.classList.add("abierta");


        // Después de que las puertas se abran
        setTimeout(function () {

            // Ocultar pantalla de entrada
            entrada.style.opacity = "0";

        }, 1800);


        // Mostrar página
        setTimeout(function () {

            entrada.style.display = "none";

            pagina.classList.add("mostrar");

            // Llevar al inicio
            window.scrollTo(0, 0);

        }, 3000);

    });


    /* =========================================
       VOLTEAR TARJETAS
    ========================================= */

    const tarjetas =
        document.querySelectorAll(".tarjeta");


    tarjetas.forEach(function (tarjeta) {

        const botones =
            tarjeta.querySelectorAll(".boton-voltear");


        botones.forEach(function (boton) {

            boton.addEventListener("click", function (e) {

                e.stopPropagation();

                tarjeta.classList.toggle("volteada");

            });

        });

    });


    /* =========================================
       COMPARTIR
    ========================================= */

const botonCompartir =
    document.getElementById("botonCompartir");


if (botonCompartir) {

    botonCompartir.addEventListener(
        "click",
        async function () {

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

                    console.log(
                        "Compartir cancelado"
                    );

                }

            } else {

                try {

                    await navigator.clipboard.writeText(
                        enlace
                    );


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

        }
    );

}
```