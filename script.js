
document.addEventListener('DOMContentLoaded', function () {
    // Array of image filenames in the Extra Images folder
    const imageFilenames = [
        'frontend2.png',
        'frontend1.png',
        'groupjs2.png',
        'groupjs1.png',
        'python3.png',
        'python2.png',
        'python1.png',
        'html4.png',
        'html3.png',
        'html2.png',
        'html1.png',
        'DogSearch1.png',
        'figma1.png',
        'figma2.png',
        'figma3.png',

        // Add more image filenames as needed
    ];

    const projectBox = document.getElementById('image-scroll-box');

    // Dynamically add images to the project box
    imageFilenames.forEach((filename, index) => {
        const img = document.createElement('img');
        img.src = `Extra Images/${filename}`;
        img.classList.add('scroll-image');
        if (index === 0) {
            img.classList.add('active');
        }
        projectBox.appendChild(img);
    });

    const images = projectBox.querySelectorAll('.scroll-image');
    let currentImageIndex = 0;

    // Function to scroll to the next image
    function scrollNextImage() {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
    }

    // Set an interval to automatically scroll to the next image every 3 seconds
    setInterval(scrollNextImage, 3000);
});
