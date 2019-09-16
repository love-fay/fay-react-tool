/**
 * Create by fay on 2019-09-16 10:42
 */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      for(let registration of registrations) {
        registration.unregister();
        console.log('SW unRegistered: ', registration);
      }
    }).catch(registrationError => {
      console.log('SW unRegistration failed: ', registrationError);
    });
  });
}