document.addEventListener("DOMContentLoaded", function() {
  var lastModified = new Date(document.lastModified);
  var dateElement = document.getElementById("last-modified");
  dateElement.textContent = lastModified.toLocaleString();
});