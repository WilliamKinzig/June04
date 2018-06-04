$(document).ready(function() {

    var alerts = ["h1", "p", "img"];

    alerts.forEach(function(element){
      $(element).click(function() {
        alert("This is a "+element+".");
      });
  })
});
