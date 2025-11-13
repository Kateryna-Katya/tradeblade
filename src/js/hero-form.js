document.getElementById('submitBtn').addEventListener('click', function(e) {
  e.preventDefault();
  
  const emailInput = document.getElementById('email');
  const message = document.querySelector('.form-message');
  const email = emailInput.value.trim();
  
  if (!email) {
    message.textContent = 'Введите ваш email!';
    message.style.color = '#FF5C5C';
    message.style.opacity = 1;
    return;
  }
  
  message.textContent = 'Отправка...';
  message.style.color = '#48CFFF';
  message.style.opacity = 1;
  
  setTimeout(() => {
    message.textContent = 'Спасибо! Форма отправлена✅';
    message.style.color = '#48CFFF';
 
      setTimeout(() => {
      emailInput.value = '';
      message.style.opacity = 0;
    }, 5000);
  }, 1500);
});
