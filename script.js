// Make the images draggable
const images = document.querySelectorAll('.movable-image');

images.forEach((image) => {
  let isDragging = false;
  let offsetX, offsetY;

  image.addEventListener('mousedown', (e) => {
    isDragging = true;

    // Calculate the offset relative to the center of the image
    const boundingBox = image.getBoundingClientRect();
    offsetX = e.clientX - (boundingBox.left + boundingBox.width / 2);
    offsetY = e.clientY - (boundingBox.top + boundingBox.height / 2);
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;

      // Set the new position based on the difference in mouse movement
      image.style.left = `${x}px`;
      image.style.top = `${y}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
});
