$(document).ready(function() {

    var flavors = ["chocolate", "vanilla", "strawberry"];

    flavors.forEach(function(element){
      $("#list").append("<li>"+element+"</li>");
  })
});
