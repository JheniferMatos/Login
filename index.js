document.getElementById('btn-login'). addEventListener('click', function(e){
    e.preventDefault();
    alert('Logado!');
});


document.getElementById('eye').addEventListener('mousedown', function() {
    document.getElementById('field-password').type = 'text';
});
  
document.getElementById('eye').addEventListener('mouseup', function() {
    document.getElementById('field-password').type = 'password';
  });
  
  // Para que o password não fique exposto apos mover a imagem.
document.getElementById('eye').addEventListener('mousemove', function() {
    document.getElementById('field-password').type = 'password';
});
