
document.querySelector('.envelope').addEventListener('click', function () {
    this.classList.toggle('open');
    if (this.classList.contains('open')) {
        createFloatingHearts();
        setTimeout(() => {
            showEnlargedImage();
        }, 1000);
    }
});

function showEnlargedImage() {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';

    const imageContainer = document.createElement('div');
    imageContainer.className = 'enlarged-image-container';

    const originalImage = document.querySelector('.valentine-img');
    const enlargedImage = document.createElement('img');
    enlargedImage.src = originalImage.src;
    enlargedImage.className = 'enlarged-image';

    const closeButton = document.createElement('button');
    closeButton.className = 'close-button';
    closeButton.innerHTML = '×';

    imageContainer.appendChild(enlargedImage);
    imageContainer.appendChild(closeButton);
    overlay.appendChild(imageContainer);
    document.body.appendChild(overlay);

    setTimeout(() => {
        overlay.classList.add('visible');
    }, 10);

    const closeOverlay = () => {
        overlay.classList.remove('visible');
        setTimeout(() => {
            overlay.remove();
            document.querySelector('.envelope').classList.remove('open');
        }, 300);
    };

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeOverlay();
    });
    closeButton.addEventListener('click', closeOverlay);
}

function createFloatingHearts() {
    const heartsContainer = document.querySelector('.hearts-container');
    heartsContainer.innerHTML = '';

    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        const startX = Math.random() * 300;
        const translateX = -50 + Math.random() * 100;

        heart.style.left = startX + 'px';
        heart.style.setProperty('--tx', translateX + 'px');

        const duration = 1 + Math.random() * 2;
        const delay = Math.random();

        heart.style.animation = `float ${duration}s ease-in ${delay}s`;

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, (duration + delay) * 1000);
    }
}

function createBackgroundHearts() {
    const backgroundHeartsContainer = document.createElement('div');
    backgroundHeartsContainer.className = 'background-hearts';
    document.body.appendChild(backgroundHeartsContainer);

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('background-heart');

        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        const translateX = -100 + Math.random() * 200;
        const translateY = -100 + Math.random() * 200;

        heart.style.left = startX + 'px';
        heart.style.top = startY + 'px';
        heart.style.setProperty('--bg-tx', translateX + 'px');
        heart.style.setProperty('--bg-ty', translateY + 'px');

        const duration = 10 + Math.random() * 10;
        const delay = Math.random() * 5;

        heart.style.animation = `floatBackground ${duration}s ease-in ${delay}s infinite`;

        backgroundHeartsContainer.appendChild(heart);
    }
}


createBackgroundHearts();