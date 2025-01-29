document.addEventListener('DOMContentLoaded', function() {

    const elementos = document.querySelectorAll('.elemento');

    const mostrarElementos = () => {

      const triggerBottom = window.innerHeight / 5 * 4;

      elementos.forEach(el => {

        const boxTop = el.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {

          el.classList.add('visible');

        } else {

          el.classList.remove('visible');

        }
      });
    };

    window.addEventListener('scroll', mostrarElementos);
    
    mostrarElementos();
  });
  