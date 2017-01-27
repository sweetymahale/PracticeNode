function closeKeepAlive() {
  if (/AppleWebKit|MSIE/.test(navigator.userAgent)) {
    $.get('/guest/common/safarifix');
  }
  return true;
}

$(document).ready(function() {
        closeKeepAlive();
});
