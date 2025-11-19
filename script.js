// Simple JS for contact form and tips toggle
document.addEventListener('DOMContentLoaded', function(){
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      const resp = document.getElementById('response');
      resp.innerText = 'Obrigado! Sua mensagem foi enviada (simulação).';
      resp.classList.add('text-success','mt-3');
      contactForm.reset();
    });
  }
  const toggleTips = document.getElementById('toggleTips');
  if(toggleTips){
    toggleTips.addEventListener('click', function(){ 
      const lists = document.querySelector('.listas');
      if(lists) lists.classList.toggle('d-none');
    });
  }
});
