if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(function(registration) {
      console.log('Service Worker zaregistrován s úspěchem:', registration);
    })
    .catch(function(error) {
      console.log('Chyba při registraci Service Workeru:', error);
    });
}