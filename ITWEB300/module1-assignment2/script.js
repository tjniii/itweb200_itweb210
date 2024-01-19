class Ticket {
    constructor(id, ticketNumber, customerName, customerEmail, problem) {
        this.id = id;
        this.ticketNumber = ticketNumber;
        this.customerName = customerName;
        this.customerEmail = customerEmail;
        this.problem = problem
      }

    validate() {
        if (!this.ticketNumber) {
            alert("Please enter a ticket number")
            return false
        }
        if (!this.customerName ) {
            alert("Please enter a customer's name")
            return false
        }
        if (!this.customerEmail ) {
            alert("Please enter a customer's email")
            return false
        }
        if (!this.problem ) {
            alert("Please enter a customer's problem")
            return false
        }
        return true
    }

    printSummary() {
        return ` <div style="margin-top: 20px; font-weight: bold">Ticket Summary</div>
        <div>Ticket Number: ${this.ticketNumber}</div>
        <div>Customer's Name: ${this.customerName}</div>
        <div>Customer's Email ${this.customerEmail}</div>
        <div>Problem: ${this.problem}</div>`
    }
  }

class TicketList {
    constructor() {
        this.list = []
    }

    getTicketList() {
        return this.list
    }

    addTicket(ticket) {
        this.list.push(ticket)
    }

    printTicketList(){
        let ticketDataDisplay = ''
        for (let i = 0; i< this.list.length ; i++) {
            ticketDataDisplay+=`<tr>`
            ticketDataDisplay+=`<td>${this.list[i].id}</td>`
            ticketDataDisplay+=`<td>${this.list[i].ticketNumber}</td>`
            ticketDataDisplay+=`<td>${this.list[i].customerName}</td>`
            ticketDataDisplay+=`<td>${this.list[i].customerEmail}</td>`
            ticketDataDisplay+=`<td>${this.list[i].problem}</td>`
            ticketDataDisplay+=`</tr>`
        }
        return ticketDataDisplay
    }


    seachByTicketNumber(ticketNumber) {
        if (!ticketNumber) {
            return alert("Please enter a value to search")
        }
        /** Filtering the ticket number */
       const filteredList =  this.list.filter(ticket => ticket.ticketNumber.includes(ticketNumber))
      return filteredList
       
    }

    setTicketList(ticketList) {
        this.list = ticketList
    }
}

let ticketList = new TicketList()

/** Submit new ticket event */
const newTicketForm = document.getElementById("newTicketForm");
newTicketForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const ticketNumber = document.getElementById("ticketNumber").value
    const customerName = document.getElementById("customerName").value
    const customerEmail = document.getElementById("customerEmail").value
    const problem = document.getElementById("problem").value

    const newTicket = new Ticket(Math.floor(Math.random() * 100), ticketNumber, customerName, customerEmail, problem)

    if (!newTicket.validate())
        return;


    /** Send ticket to backend server */
    const ticketSubmitted = submitTicketToServer(newTicket)


    /** Print ticket summary */
    document.getElementById("ticketSummary").innerHTML = ticketSubmitted.printSummary()


    ticketList.addTicket(ticketSubmitted)

    /** Display ticket list */
    displayListTicketsData(ticketList)
  });


/** Submit search event */
const searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchEntered = document.getElementById("search").value
    const filteredList = ticketList.seachByTicketNumber(searchEntered)
    const filteredTicketList = new TicketList()
    filteredTicketList.setTicketList(filteredList)
    displayListTicketsData(filteredTicketList)
});


function displayListTicketsData(listTickets) {
    document.getElementById("list-tickets").innerHTML = `
    <table cellspacing=5 cellpadding=5 style="width: 100%">
        <tr>
            <td>Ticket's ID</td>
            <td>Ticket's Number</td>
            <td>Customer's Name</td>
            <td>Customer's Email</td>
            <td>Problem</td>
        </tr>
        ${listTickets.printTicketList()}
    </table>
    `
  }


function submitTicketToServer (ticket) {
    // here, the function submit request to create a new ticket to server
    return ticket
}



