// JavaScript for opening and closing the modal

const openModalLinks = document.querySelectorAll('.open-modal');
const closeModal = document.querySelectorAll('.close-modal');
const projectModals = document.querySelectorAll('.project-modal');

openModalLinks.forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    projectModals[index].style.display = 'block';
  });
});

closeModal.forEach((closeBtn, index) => {
  closeBtn.addEventListener('click', () => {
    projectModals[index].style.display = 'none';
  });
});

window.addEventListener('click', (event) => {
  projectModals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});

