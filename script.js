document.querySelectorAll('#sidebar a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const id = this.getAttribute('href');
    const target = document.querySelector(id);

    if (!target) return;

    const topOffset = 120; // adjust this value (height below header)
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - topOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  });
});
