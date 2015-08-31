$(document).ready(function() {

  //Select all of the div elements that have a class of "module".
  $("div.module");

  //Come up with three selectors that you could use to get the third item in the #myList unordered list
  $("#myList li:nth-child(3)");
    
  //Select the label for the search input using an attribute selector
  $("[for='q']").css("border", "2px solid rgba(0, 105, 98, 1)");

  //Count hidden elements on the page
  var count = $(":hidden").length;

  //Count the image elements that have an alt attribute
  var altImg = $("img[alt]").length;

  //Select all of the odd table rows in the table body
  $("body table tr:odd").css("background-color", "rgba(215, 143, 0, 1)");

  // Select all of the image elements on the page. Log each image's alt attribute
  console.log("Select all of the image elements on the page. Log each image's alt attribute:");
  
  $("img").each(function () {
    var alt = $(this).attr( "alt");
    console.log(alt);
  });
  
  //Select the search input text box, then traverse up to the form and add a class to the form.
  $("form:first :nth-child(2)").parent("form:first");
  $("form:first").addClass("formClass");

  //Select the list item inside #myList that has a class of "current".
  //Remove that class from it. Add a class of "current" to the next list item
  $("#myList li.current").removeClass("current").next().addClass("current");

  //Traverse your way to the submit button.
  $("#specials select").parent("form").find("input[type='submit']");

  //Select the first list item in the #slideshow element
  //Add the class "current" to it, and then add a class of "disabled" to its sibling elements
  $("#slideshow li:first").addClass("current").nextAll("li").addClass("disabled");

  //Add five new list items to the end of the unordered list #myList
  for (var item=0; item<5 ; item++)
    $('<li>' + '['+ (item + 1) +']' +' A new element</li>').insertAfter("#myList li:last");

  //Remove the odd list items
  for (var odd=1; odd<8 ; odd++)
    $("#myList li:first").remove();

  //Add another h2 and another paragraph to the last div.module
  $("div.module:last").append("<h1>My H1 Text</h1>");

  var p = document.createElement('p'); 
  txt = document.createTextNode('Text of P'); 
  p.appendChild(txt);  

  $("div.module:last").append(p);

  //ó también puede ser:
  //$("div.module:last").append("<p>My P Text</p>");

  //Add another option to the select element. Give the option the value "Wednesday"
  $("#specials select").append("<option value='wednesday'>Wednesday</option>");

  //Add a new div.module to the page after the last one. Put a copy of one of the existing images inside of it
  $("<div>Here is a new div after the last div!</div>").addClass("module").append($("img").first().clone()).insertAfter($("div.module:last"));
  
});