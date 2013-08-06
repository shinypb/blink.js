;(function() {

  var blinkStateVisible = true;
  var kBlinkVisibilityDuration = 750;
  var kBlinkHiddenDuration = 250;

  function toggleBlinking() {
    blinkStateVisible = !blinkStateVisible;
    var visibilityState = blinkStateVisible ? 'visible' : 'hidden'
    var timeoutDuration = blinkStateVisible ? kBlinkVisibilityDuration : kBlinkHiddenDuration;
    var blinkElements = Array.prototype.slice.apply(document.querySelectorAll('blink'));

    blinkElements.forEach(function(elem) {
      elem.style.visibility = visibilityState;
    });

    setTimeout(toggleBlinking, timeoutDuration);
  };

  setTimeout(toggleBlinking, kBlinkVisibilityDuration);

})();