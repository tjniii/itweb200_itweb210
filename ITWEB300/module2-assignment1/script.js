class Ticket {
    constructor(id, reqDate, empId, fName, lName, probDesc) {
        this.id = id;
        this.reqDate = reqDate;
        this.empId = empId;
        this.fName = fName;
        this.lName = lName;
        this.probDesc = probDesc;
      }

    validate() {

        const date_regex = /^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/

        if (!this.reqDate || !date_regex.test(this.reqDate)) {
            alert("Please enter a valid request date")
            return false
        }

        const empId_regex = /^[A-Z]\d{5}$/

        if (!this.empId || !empId_regex.test(this.empId)) {
            alert("Please enter a valid employee ID")
            return false
        }
        const name_regex = /^[A-Z]/

        if (!this.fName || !name_regex.test(this.fName)) {
            alert("Please enter a valid first name")
            return false
        }

        if (!this.lName || !name_regex.test(this.lName)) {
            alert("Please enter a valid last name")
            return false
        }
        
        if (!this.probDesc) {
            alert("Please enter a valid problem description")
            return false
        }
        return true
    }
  }


/** Submit new ticket event */
const newTicketForm = document.getElementById("newTicketForm");
newTicketForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const reqDate = document.getElementById("reqDate").value
    const empId = document.getElementById("empId").value
    const fName = document.getElementById("fName").value
    const lName = document.getElementById("lName").value
    const probDesc = document.getElementById("probDesc").value
    const newTicket = new Ticket(Math.floor(Math.random() * 100), reqDate, empId, fName, lName, probDesc)

    if (!newTicket.validate())
        return;
    else 
        return alert("form valid")

  });
