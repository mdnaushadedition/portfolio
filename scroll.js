    const boxes = document.querySelectorAll('.box');

    window.addEventListener('scroll', () => {
      boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const trigger = window.innerHeight * 0.85;

        if (boxTop < trigger && boxTop > 0) {
          box.classList.add('show');
        } else {
          box.classList.remove('show');
        }
      });
    });