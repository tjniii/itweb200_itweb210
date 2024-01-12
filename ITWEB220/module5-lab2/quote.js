window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {
      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

function fetchQuotes(topic, count) {
   // Create a new XMLHttpRequest object
   const xhr = new XMLHttpRequest();

   // Set the responseType to expect JSON
   xhr.responseType = "json";

   // Define the URL for the quote web API with the selected topic and count
   const url = `https://example.com/quote-api?topic=${topic}&count=${count}`;

   // Set up the event listener for when the request is complete
   xhr.onload = function() {
      if (xhr.status === 200) {
         // If the request is successful, handle the response
         responseReceivedHandler(xhr.response);
      } else {
         // Handle errors here (e.g., display an error message)
         console.error("Error fetching quotes:", xhr.statusText);
      }
   };

   // Open the request with the GET method and the specified URL
   xhr.open("GET", url);

   // Send the request
   xhr.send();
}

function responseReceivedHandler(quotes) {
   // Display the quotes in an ordered list
   let html = "<ol>";

   // Iterate through each quote and display it
   quotes.forEach((quote, index) => {
      const { text, source } = quote;
      html += `<li>Quote ${index + 1} - ${text} - ${source}</li>`;
   });

   html += "</ol>";

   // Update the quotes div with the HTML
   document.querySelector("#quotes").innerHTML = html;
}
