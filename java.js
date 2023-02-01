// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.




$(document).ready(function() {
    // Get the save button
    const saveButton = $("#save");
  
    // Add a click event listener to the save button
    saveButton.on("click", function() {
      // Get the containing time-block
      const timeBlock = $(this).closest(".hour");
      
      // Get the id of the containing time-block
      const timeBlockId = timeBlock.attr("id");
      
      // Get the user input
      const userInput = timeBlock.find("input").val();
      
      // Save the user input in local storage using the id of the containing time-block as the key
      localStorage.setItem(timeBlockId, userInput);
    });
  
    const timeBlocks = $(".container-fluid px-5");
  
    // Get the current hour
    const currentHour = new Date().getHours();
    // Loop through each time block
    timeBlocks.each(function() {
      // Get the id of the time block
      const timeBlockId = $(this).attr("id");
      
      // Get the hour from the id
      const hour = parseInt(timeBlockId.split("-")[2]);
      
      // Compare the hour to the current hour
      if (hour < currentHour) {
        // Add the past class
        $(this).addClass("row time-block past");
      } else if (hour > currentHour) {
        // Add the future class
        $(this).addClass("row time-block future");
      } else {
        // Add the present class
        $(this).addClass("row time-block present");
      }
  
      // Get the saved user input from localStorage
      const savedUserInput = localStorage.getItem(timeBlockId);
      
      // If there is a saved user input
      if (savedUserInput == true) {
        // Get the textarea element in the time block
        const textarea = $(this).find(".col-8.col-md-10.description");
        
        // Set the value of the textarea to the saved user input
        textarea.val(savedUserInput);
      }
    });
  
    // Get the header element
    const header = $("header");
  
    // Get the current date
    const currentTime = new Date();
  
    // Format the current date as "Weekday, Month Day, Year"
    const formattedTime = currentTime.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true
      });
  
    // Create a new element to display the current date
    const timeDisplay = $("<p>" + formattedTime + "</p>");
  
    // Add the date display to the header
    header.append(timeDisplay);
  });
  


    
    
    
    
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
