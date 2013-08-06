;(function() {

  var blinkStateVisible = true;
  function toggleBlinking() {
    blinkStateVisible = !blinkStateVisible;
    var visibilityState = blinkStateVisible ? 'visible' : 'hidden'
    var blinkElements = Array.prototype.slice.apply(document.querySelectorAll('blink'));

    blinkElements.forEach(function(elem) {
      elem.style.visibility = visibilityState;
    });
  };

  var kBlinkInterval = 1000;
  var blinkTimer = setInterval(toggleBlinking, kBlinkInterval);

})();