export function validarFormulario() {
  const form = document.getElementById('contatoForm');
  if (!form) return;
  form.addEventListener('submit', e=>{
    e.preventDefault();
    alert('Mensagem enviada! (simulação)');
  });
}
