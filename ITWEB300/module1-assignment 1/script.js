class Ticket {
    constructor(id, number, customerName, customerEmail, problem) {
        this.id = id;
        this.number = number;
        this.customerName = customerName;
        this.customerEmail = customerEmail;
        this.problem = problem
      }
  }

let listTickets = []



/** Submit new ticket event */
const newTicketForm = document.getElementById("newTicketForm");
newTicketForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const ticketNumber = document.getElementById("ticketNumber").value
    const customerName = document.getElementById("customerName").value
    const customerEmail = document.getElementById("customerEmail").value
    const problem = document.getElementById("problem").value

    /** Validate input ticket */
    if (!ticketNumber ) {
        return alert("Please enter a ticket number")
    }
    if (!customerName ) {
        return alert("Please enter a customer's name")
    }
    if (!customerEmail ) {
        return alert("Please enter a customer's email")
    }
    if (!problem ) {
        return alert("Please enter a customer's problem")
    }


    /** Send ticket to backend server */
    const ticketSubmitted = submitTicketToServer()




    const ticketSubmittedObject = new Ticket(Math.floor(Math.random() * 100), ticketNumber, customerName, customerEmail, problem)

    /** Print ticket summary */
    document.getElementById("ticketSummary").innerHTML = `
        <div style="margin-top: 20px; font-weight: bold">Ticket Summary</div>
        <div>Ticket Number: ${ticketSubmittedObject.number}</div>
        <div>Customer's Name: ${ticketSubmittedObject.customerName}</div>
        <div>Customer's Email ${ticketSubmittedObject.customerEmail}</div>
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
        ticketDataDisplay+=`<td>${listTickets[i].number}</td>`
        ticketDataDisplay+=`<td>${listTickets[i].customerName}</td>`
        ticketDataDisplay+=`<td>${listTickets[i].customerEmail}</td>`
        ticketDataDisplay+=`<td>${listTickets[i].problem}</td>`
        ticketDataDisplay+=`</tr>`
    }
   
    document.getElementById("list-tickets").innerHTML = `
    <table cellspacing=5 cellpadding=5 style="width: 100%">
        <tr>
            <td>Ticket's ID</td>
            <td>Ticket's Number</td>
            <td>Customer's Name</td>
            <td>Customer's Email</td>
            <td>Problem</td>
        </tr>
        ${ticketDataDisplay}
    </table>
    `
  }

function submitTicketToServer () {
    // here, the function submit request to create a new ticket to server
  }



