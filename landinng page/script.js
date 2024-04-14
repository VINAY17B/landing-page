document.addEventListener('DOMContentLoaded', function () {

    var modal = document.getElementById('productModal');
  

    var modalBtns = document.querySelectorAll('.view-details-btn');
  

    var closeBtn = modal.querySelector('.close');
  

    function openModal() {
      modal.style.display = 'block';
    }

    function closeModal() {
      modal.style.display = 'none';
    }
  

    modalBtns.forEach(function (btn) {
      btn.addEventListener('click', openModal);
    });
  
    closeBtn.addEventListener('click', closeModal);
  
  
    window.addEventListener('click', function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  });
  