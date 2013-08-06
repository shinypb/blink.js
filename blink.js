;(function() {

  var blinkStateVisible = true;
  var kBlinkVisibilityDuration = 750;
  var kBlinkHiddenDuration = 250;

  function toggleBlinking() {
    blinkStateVisible = !blinkStateVisible;
    var visibilityState = blinkStateVisible ? 'visible' : 'hidden'
    var timeoutDuration = blinkStateVisible ? kBlinkVisibilityDuration : kBlinkHiddenDuration;
    var blinkElements = document.querySelectorAll('blink');

    Array.prototype.forEach.call(blinkElements, function (elem) {
      elem.style.visibility = visibilityState;
    });

    setTimeout(toggleBlinking, timeoutDuration);
  };

  setTimeout(toggleBlinking, kBlinkVisibilityDuration);

}());
