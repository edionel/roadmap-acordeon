function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const allContents = document.querySelectorAll('.accordion-content');

    // Colapsar otras secciones
    allContents.forEach(item => {
        if (item !== content) {
            item.style.display = 'none';
        }
    });

    // Alternar la sección actual
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}