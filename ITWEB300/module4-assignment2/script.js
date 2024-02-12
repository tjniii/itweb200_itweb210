$("#btnSubmit").mouseover(function(e) {
    $("#btnSubmit").css("color","red")
    $("#btnSubmit").css("font-weight","bold")
})



class Ticket {
    constructor(id, reqDate, empID, fName, lName, problem, timestamp) {
        this.id = id;
        this.reqDate = reqDate;
        this.empID = empID;
        this.fName = fName;
        this.lName = lName;
        this.problem = problem
        this.timestamp = timestamp
      }
  }

let listTickets = []



/** Submit new ticket event */
$('#newTicketForm').bind('submit', function(e) {
    e.preventDefault();
    const reqDate = $("#reqDate").val()
    const empID = $("#empID").val()
    const fName = $("#fName").val()
    const lName = $("#lName").val() 
    const problem =$("#problem").val()

    /** Validate input ticket */
    if (!reqDate ) {
        return alert("Please enter a Req Date")
    }
    if (!empID ) {
        return alert("Please enter a Emp ID")
    }
    if (!fName ) {
        return alert("Please enter a customer's first name")
    }
    if (!lName ) {
        return alert("Please enter a customer's last name")
    }
    if (!problem ) {
        return alert("Please enter a customer's problem")
    }

    /** Send ticket to backend server */
    const ticketSubmitted = submitTicketToServer()

    const dt = new Date();
    const time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();



    const ticketSubmittedObject = new Ticket(Math.floor(Math.random() * 100), reqDate, empID, fName, lName, problem, time)

    /** Print ticket summary */
    document.getElementById("ticketSummary").innerHTML = `
        <div style="margin-top: 20px; font-weight: bold">Ticket Summary</div>
        <div>Req Date: ${ticketSubmittedObject.reqDate}</div>
        <div>Emp ID: ${ticketSubmittedObject.empID}</div>
        <div>Customer's First Name: ${ticketSubmittedObject.fName}</div>
        <div>Customer's Last Name ${ticketSubmittedObject.lName}</div>
        <div>Problem: ${ticketSubmittedObject.problem}</div>
    `

    /** Display ticket list */
    listTickets.push(ticketSubmittedObject)
    displayListTicketsData(listTickets)
  });




/** Submit search event */
const searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchEntered = document.getElementById("search").value
    if (!searchEntered) {
        return alert("Please enter a value to search")
    }
    /** Filtering the ticket number */
    const ticketFiltered = listTickets.filter(ticket => ticket.number.includes(searchEntered))

    /** Display filtered tickets list */
    displayListTicketsData(ticketFiltered)
});


function displayListTicketsData(listTickets) {
    let ticketDataDisplay = ''
    for (let i = 0; i< listTickets.length ; i++) {
        
        ticketDataDisplay+=`<tr>`
        ticketDataDisplay+=`<td>${listTickets[i].id}</td>`
        ticketDataDisplay+=`<td>${listTickets[i].reqDate}</td>`
        ticketDataDisplay+=`<td>${listTickets[i].empID}</td>`
        ticketDataDisplay+=`<td>${listTickets[i].fName}</td>`
        ticketDataDisplay+=`<td>${listTickets[i].lName}</td>`
        ticketDataDisplay+=`<td>${listTickets[i].problem}</td>`
        ticketDataDisplay+=`<td>${listTickets[i].timestamp}</td>`

        ticketDataDisplay+=`</tr>`
    }
   
    document.getElementById("list-tickets").innerHTML = `
    <table cellspacing=5 cellpadding=5 style="width: 100%">
        <tr>
            <td>Ticket's ID</td>
            <td>Ticket's Req Date</td>
            <td>Ticket's Emp ID</td>
            <td>Customer's First Name</td>
            <td>Customer's Last Name</td>
            <td>Problem</td> 
            <td>Timestamp</td>
        </tr>
        ${ticketDataDisplay}
    </table>
    `
  }

function submitTicketToServer () {
    // here, the function submit request to create a new ticket to server
  }



