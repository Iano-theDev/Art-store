const images: string[] = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
const prevButton: HTMLButtonElement | null = document.querySelector('.prev-button');
const nextButton: HTMLButtonElement | null = document.querySelector('.next-button');
const image: HTMLImageElement | null = document.querySelector('.carousel-image');

let currentIndex: number = 0;

if (prevButton && nextButton && image) {
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    image.src = images[currentIndex];
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    image.src = images[currentIndex];
  });
}
