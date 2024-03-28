// Después de 2 segundos, ocultar el elemento de carga
setTimeout(() => {
    const loadingElement = document.querySelector('.loading');
    loadingElement.style.display = 'none';
}, 2000);