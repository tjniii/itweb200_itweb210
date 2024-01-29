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

// TODO: Modify to use Fetch API
function fetchQuotes() {
   // Get the selected topic and count from the user
   var topic = document.getElementById("topic").value;
   var count = document.getElementById("count").value;

   // Build the API URL
   var apiUrl = "https://wp.zybooks.com/quotes.php?topic=" + topic + "&count=" + count;

   // Use the Fetch API to request quotes from the quote web API
   fetch(apiUrl)
       .then(response => response.json())
       .then(data => {
           // Check if the response contains an error message
           if (data.error) {
               // Display the error message in the quotes div
               document.getElementById("quotes").innerHTML = data.error;
           } else {
               // Display the quotes in an ordered list
               var quotesList = "<ol>";
               for (var i = 0; i < data.length; i++) {
                   quotesList += "<li>" + data[i].quote + " - " + data[i].source + "</li>";
               }
               quotesList += "</ol>";

               // Display the ordered list in the quotes div
               document.getElementById("quotes").innerHTML = quotesList;
           }
       })
       .catch(error => {
           // Display any fetch error in the quotes div
           document.getElementById("quotes").innerHTML = "Error fetching quotes: " + error.message;
       });
}

