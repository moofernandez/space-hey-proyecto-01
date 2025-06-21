
        document.addEventListener('DOMContentLoaded', function() {
            const carrusel = document.querySelector('.carrusel');
            const images = carrusel.querySelectorAll('img');
            
            // Clonamos las imágenes para el efecto infinito
            images.forEach(img => {
                const clone = img.cloneNode(true);
                carrusel.appendChild(clone);
            });
            
            // Ajustamos el ancho del contenedor dinámicamente
            function ajustarAncho() {
                const imgWidth = images[0].offsetWidth;
                carrusel.style.width = `${imgWidth * images.length * 2}px`;
            }
            
            // Inicialización
            ajustarAncho();
            window.addEventListener('resize', ajustarAncho);
            
            // Animación con JavaScript para mejor control
            let animacion;
            const velocidad = 70; // px/segundo
            let posicion = 0;
            
            function animar() {
                const imgWidth = images[0].offsetWidth;
                posicion += velocidad / 60; // 60 fps
                
                // Reinicio suave cuando llegamos al final
                if (posicion >= imgWidth * images.length) {
                    posicion = 0;
                }
                
                carrusel.style.transform = `translateX(-${posicion}px)`;
                animacion = requestAnimationFrame(animar);
            }
            
            animar();
            
            // // Pausa al hacer hover
            // carrusel.addEventListener('mouseenter', () => {
            //     cancelAnimationFrame(animacion);
            // });
            
            // carrusel.addEventListener('mouseleave', () => {
            //     animacion = requestAnimationFrame(animar);
            // });
        });
