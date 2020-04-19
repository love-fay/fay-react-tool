/**
 * Create by fay on 2019-09-16 10:42
 */
const {getPublicPathWithoutStartAndEndForwardSlash} = require('../publicPath');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    const publicPathWithoutStartAndEndForwardSlash = getPublicPathWithoutStartAndEndForwardSlash();
    const scope = publicPathWithoutStartAndEndForwardSlash ? '/'+publicPathWithoutStartAndEndForwardSlash : '';
    navigator.serviceWorker.register(scope+'/sw.js').then(function(registration) {
      console.log('SW registered: ', registration);
    }).catch(function(registrationError) {
      console.log('SW registration failed: ', registrationError);
    });
    navigator.serviceWorker.addEventListener('controllerchange',
      function() {
        console.log('controllerchange');
        window.location.reload();
      }
    )
  });
}