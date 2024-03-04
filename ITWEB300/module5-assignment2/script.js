 function getTickets(employeeId) {
    $.ajax({
        type: "GET",
        url: "data.xml",
        dataType: "xml",
        crossDomain: true,     
    }).done(function(tickets) {
      console.log(tickets)
      });

    // const tickets = await fetch("https://65b81c1046324d531d55f686.mockapi.io/tickets")
    // tickets.json().then((ticketsData) => {
      
    //     displayTicket = ''

    //     for (let i = 0; i < ticketsData.length; i++) {
    //         displayTicket += `<tr>`
    //         displayTicket += `<td><button onclick="deleteTicket(`+ticketsData[i].Id+`)">Delete</button></td>`

    //         displayTicket += `<td>` +ticketsData[i].ReqDate+ `</td>`
    //         displayTicket += `<td>`+ticketsData[i].EmpID+`</td>`
    //         displayTicket += `<td>`+ticketsData[i].FName+`</td>`
    //         displayTicket += `<td>`+ticketsData[i].LName+`</td>`
    //         displayTicket += `<td>`+ticketsData[i].ProbDesc+`</td>`
    //         displayTicket += `<td>`+ticketsData[i].Status+`</td>`
    //         displayTicket += `<td>`+ticketsData[i].Response+`</td>`
    //         displayTicket += `</tr>`

    //     }

    //     document.getElementById("data-table").innerHTML = displayTicket
    // })
}