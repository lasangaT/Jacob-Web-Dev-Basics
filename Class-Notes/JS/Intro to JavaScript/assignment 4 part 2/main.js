const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg'];
const altText = {
  'pic1.jpg': 'Closeup of a human eye',
  'pic2.jpg': 'Beautiful landscape',
  'pic3.jpg': 'Colorful flowers'
};

images.forEach(filename => {
  const img = document.createElement('img');
  img.setAttribute('src', 'images/' + filename);
  img.setAttribute('alt', altText[filename]);
  img.addEventListener('click', function() {
    displayedImage.setAttribute('src', 'images/' + filename);
    displayedImage.setAttribute('alt', altText[filename]);
  });
  thumbBar.appendChild(img);
});

btn.addEventListener('click', function() {
    displayedImage.classList.toggle('dark');
  });
