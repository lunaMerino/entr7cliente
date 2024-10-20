function filter(technology) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      if (technology === 'all') {
        card.style.display = 'block'; 
      } else {
        if (card.classList.contains(technology)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      }
    });
  }