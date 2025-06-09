const container = document.getElementById('container');
const image = document.getElementById('image');

container.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const rotateX = -(y - rect.height / 2) / 10; 
  const rotateY = (x - rect.width / 2) / 10;  

  image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

container.addEventListener('mouseleave', () => {
  image.style.transform = 'rotateX(0deg) rotateY(0deg)';
});
