

/**
 * Submit loggin form
 */

$('#loginForm').bind('submit', function(e) {
    e.preventDefault();

    const correctUsername = 'thomas'
    const correctPassword = '123'

    const enteredUsername = $("#username").val()
    const enteredPassword = $("#password").val()

    /**
     * Handling success login
     */
    if (enteredUsername == correctUsername && enteredPassword == correctPassword) {
        $("#hello").css("visibility","visible")
        $("#error").css("visibility", "hidden")
        $('#loginForm').css("visibility", "hidden")
        $('#dropdown').css("visibility", "visible")        
    } else {
        /**
         * Handling failed login
         */
        $('#error').css('visibility', 'visible')
        $("#username").val(null)
        $("#password").val(null)
    }
} )


/**
 * onChange event function
 *  - Display correcsponding form base on selection
 */
function selectTicketType() {
    const ticketType = document.getElementById("dropdown").value;
    if (ticketType == 'computer') {
        $('#computerForm').css('visibility', 'visible')
        $('#softwareForm').css('visibility', 'hidden')
    }
    if (ticketType == 'software') {
        $('#computerForm').css('visibility', 'hidden')
        $('#softwareForm').css('visibility', 'visible')
    }
}
/**
 * Logout:
 * - Make all form hidden except the login Form
 */
function logout(){
    $('#computerForm').css('visibility', 'hidden')
    $('#softwareForm').css('visibility', 'hidden')
    $('#dropdown').css('visibility', 'hidden')
    $('#error').css('visibility', 'hidden')
    $('#hello').css('visibility', 'hidden')
    $('#loginForm').css('visibility', 'visible')
    $('#computerForm').css('visibility', 'hidden')
    $('#computerForm').css('visibility', 'hidden')
    $("#username").val(null)
    $("#password").val(null)
}