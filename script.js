document.addEventListener('DOMContentLoaded', () => {
    // Typewriter Effect
    const intro = document.getElementById('intro');
    const text = intro.innerHTML;
    intro.innerHTML = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            intro.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();

    // Contact Form Submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Message sent successfully!');
        this.reset();
    });
});

function openLightbox() {
    document.getElementById('lightbox').style.display = 'block';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function showImage(index) {
    const images = document.querySelectorAll('.gallery img');
    const lightboxContent = document.getElementById('lightbox-content');
    lightboxContent.src = images[index].src;
}
