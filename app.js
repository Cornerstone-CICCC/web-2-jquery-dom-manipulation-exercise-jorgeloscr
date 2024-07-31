// COMPLETE THE CODE

$(function() {

   // Exercise 1: Find all <li> elements within a <ul> and change their text color to blue
   $("#exercise1Button").on('click', function() {
    $("#exercise1 ul").find('li').css('color','blue')
  });

  // Exercise 2: Find the parent <div> of a paragraph and change its background color
  $("#exercise2Button").on('click', function() {
    $("#exercise2 p").parent().css('background-color', 'red');
  });

    // Exercise 3: Find all ancestor <div> elements of a paragraph and change their background color
    $("#exercise3Button").on('click', function() {
      $("#exercise3 p").each(function() {
        $(this).parents("div").css("background-color", "yellow");
      });
    });

    // Exercise 4: From the `this` selector, find and hide only the second <p> sibling of the <h3> element. The `this` keyword refers to the clicked button
    $("#exercise4Button").on('click', function() {
      $(this).siblings('h3').siblings('p').filter(':nth-of-type(2)').hide();
    });

    // Exercise 5: From the `this` selector, find all <p> elements within the <div> and add a border to them. The `this` keyword refers to the clicked button
    $("#exercise5Button").on('click', function() {
      $(this).closest('div').find('p').css('border', '2px solid black');
    });

    // Exercise 6: From the `this` selector, find and change the color of <span>Item 5</span>. The `this` keyword refers to the clicked button
    $("#exercise6Button").on('click', function() {
      $(this).filter(function() {
    return $(this).text() === "Item 5";
  }).css("color", "red");
});
 })