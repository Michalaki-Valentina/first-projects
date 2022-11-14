var modal = document.getElementById('modal-container');
var close = document.querySelector('.close');

var masks = document.querySelectorAll('.mask');


masks.forEach(mask => {
  mask.addEventListener('click', openModal);
})

close.addEventListener('click', closeModal);

function openModal($event) {
  const image = $event.target.previousElementSibling;
  const src = image.getAttribute('src');
  document.getElementById("img-1").src = image.getAttribute('src');
  modal.style.display = 'flex'; 
}

function closeModal() {
  modal.style.display = 'none'; 
}
  