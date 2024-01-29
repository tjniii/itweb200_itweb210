
const loginForm = document.getElementById("loginForm");

/**
 * Submit loggin form
 */
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const correctUsername = 'thomas'
    const correctPassword = '123'

    const enteredUsername = document.getElementById("username").value
    const enteredPassword = document.getElementById("password").value

    /**
     * Handling success login
     */
    if (enteredUsername == correctUsername && enteredPassword == correctPassword) {
        document.getElementById("hello").style.visibility = "visible"
        document.getElementById("error").style.visibility = "hidden"
        loginForm.style.visibility = "hidden"
        document.getElementById("dropdown").style.visibility ="visible"
        
    } else {
        /**
         * Handling failed
         */
        document.getElementById("error").style.visibility = "visible"
        document.getElementById("username").value = null
        document.getElementById("password").value = null

    }


})

/**
 * onChange event function
 *  - Display correcsponding form base on selection
 */
function selectTicketType() {
    const ticketType = document.getElementById("dropdown").value;
    if (ticketType == 'computer') {
        document.getElementById("computerForm").style.visibility = "visible"
        document.getElementById("softwareForm").style.visibility = "hidden"

    }
    if (ticketType == 'software') {
        document.getElementById("computerForm").style.visibility = "hidden"
        document.getElementById("softwareForm").style.visibility = "visible"
    }
}
/**
 * Logout:
 * - Make all form hidden except the login Form
 */
function logout(){
    document.getElementById("computerForm").style.visibility = "hidden"
    document.getElementById("softwareForm").style.visibility = "hidden"
    document.getElementById("dropdown").style.visibility = "hidden"
    document.getElementById("error").style.visibility = "hidden"
    document.getElementById("hello").style.visibility = "hidden"
    document.getElementById("loginForm").style.visibility = "visible"
    document.getElementById("username").value = null
    document.getElementById("password").value = null

}