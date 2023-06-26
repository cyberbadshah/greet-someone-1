document.getElementById('copyButton').addEventListener('click', function() {
  var url = window.location.href; // Get the current URL

  // Create a temporary input element
  var tempInput = document.createElement('input');
  tempInput.setAttribute('value', url);
  document.body.appendChild(tempInput);

  // Select the input field and copy the URL to the clipboard
  tempInput.select();
  document.execCommand('copy');

  // Remove the temporary input element
  document.body.removeChild(tempInput);

  // Provide some visual feedback to the user
  alert('URL copied to clipboard: ' + url);
});