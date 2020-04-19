/**
 * Create by fay on 2019-09-16 10:42
 */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      for(var i = 0; i < registrations.length; i++){
        var registration = registrations[i];
        registration.unregister();
        console.log('SW unRegistered: ', registration);
      }
    }).catch(function(registrationError) {
      console.log('SW unRegistration failed: ', registrationError);
    });
  });
}