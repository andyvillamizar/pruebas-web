function navigateTo(screenId) {
  // Ocultar todas las pantallas
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => screen.classList.remove('active'));

  // Mostrar la pantalla seleccionada
  const targetScreen = document.getElementById(screenId);
  targetScreen.classList.add('active');
}

// Navegar por defecto a la pantalla de inicio
navigateTo('login-screen');
