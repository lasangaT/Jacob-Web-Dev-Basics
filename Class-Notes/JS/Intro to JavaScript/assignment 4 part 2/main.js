document.addEventListener('DOMContentLoaded', function() {
  const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
  const altText = {
    'pic1.jpg': 'Closeup of a human eye',
    'pic2.jpg': 'Beautiful landscape',
    'pic3.jpg': 'Colorful flowers',
    'pic4.jpg': 'Mountain view',
    'pic5.jpg': 'Ocean sunset'
  };

  const displayedImage = document.querySelector('.displayed-img');
  const thumbBar = document.getElementById('thumbBar');
  const btnDarken = document.querySelector('.dark');

  images.forEach((filename, index) => {
    const img = document.createElement('img');
    img.setAttribute('src', 'images/' + filename);
    img.setAttribute('alt', altText[filename]);
    img.addEventListener('click', function() {
      displayedImage.setAttribute('src', 'images/' + filename);
      displayedImage.setAttribute('alt', altText[filename]);
    });
    thumbBar.appendChild(img);
  });

  btnDarken.addEventListener('click', function() {
    console.log('Darken button clicked');
    if (displayedImage.classList.contains('dark')) {
      displayedImage.classList.remove('dark');
    } else {
      displayedImage.classList.add('dark');
    }
  });
});
