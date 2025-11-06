
// script.js - interatividade básica para as páginas
document.addEventListener('DOMContentLoaded', function(){
  // copy recipe buttons
  document.querySelectorAll('.btn-copy').forEach(btn=>{
    btn.addEventListener('click', ()=> {
      const text = btn.dataset.recipe || btn.textContent;
      navigator.clipboard?.writeText(text).then(()=> {
        btn.textContent = 'Copiado!';
        setTimeout(()=> btn.textContent = 'Copiar ingredientes', 1500);
      });
    });
  });

  // toggle tips
  const toggle = document.getElementById('toggleTips');
  if(toggle){
    toggle.addEventListener('click', ()=> {
      document.querySelectorAll('.listas').forEach(el => el.classList.toggle('hidden'));
    });
  }

  // editable plan table cells saved to localStorage
  document.querySelectorAll('.table-plan td').forEach(td=>{
    td.setAttribute('contenteditable','true');
    td.addEventListener('blur', ()=> savePlan());
  });
  function savePlan(){
    const rows = Array.from(document.querySelectorAll('.table-plan tbody tr')).map(tr=>{
      return Array.from(tr.children).map(td=>td.textContent);
    });
    localStorage.setItem('nutri_plan', JSON.stringify(rows));
  }
  // load plan if exists
  const saved = localStorage.getItem('nutri_plan');
  if(saved){
    try{
      const rows = JSON.parse(saved);
      const trs = document.querySelectorAll('.table-plan tbody tr');
      trs.forEach((tr,i)=>{
        Array.from(tr.children).forEach((td,j)=>{
          if(rows[i] && rows[i][j]) td.textContent = rows[i][j];
        });
      });
    }catch(e){}
  }

  // contato form (simulado)
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      const resp = document.getElementById('response');
      resp.textContent = 'Mensagem enviada (simulada). Obrigado!';
      contactForm.reset();
    });
  }
});
