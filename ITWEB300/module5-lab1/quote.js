$(function () {
   $("#fetchQuotesBtn").click(function () {
      // Get selected topic and count from drop-down lists
      const selectedTopic = $("#topicSelection option:selected").val();
      const selectedCount = $("#countSelection option:selected").val();
      fetchQuotes(selectedTopic, selectedCount);
   });
});

function fetchQuotes(topic, count) {
   // Use $.get() to request quotes from the web API
   $.get(`https://example.com/quote-api?topic=${topic}&count=${count}`, function (data) {
      // Check if data is an array
      if (Array.isArray(data)) {
         let html = "<ol>";

         // Loop through the returned quotes and display them
         data.forEach((quote, index) => {
            const source = quote.source || "Anonymous";
            html += `<li>Quote ${index + 1} - ${quote.text} - ${source}</li>`;
         });

         html += "</ol>";
         $("#quotes").html(html);
      } else {
         // Handle the case where the response is not an array
         $("#quotes").html("<p>Error: Unable to fetch quotes.</p>");
      }
   }, "json")
   .fail(function() {
      // Handle the case where the request fails
      $("#quotes").html("<p>Error: Unable to fetch quotes.</p>");
   });
}
