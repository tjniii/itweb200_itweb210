function isStrongPassword(password) {
    // Check length
    if (password.length < 8) {
        return false;
    }

    // Check if it contains the string "password"
    if (password.toLowerCase().includes('password')) {
        return false;
    }

    // Check for at least one uppercase character
    if (!/[A-Z]/.test(password)) {
        return false;
    }

    // If all conditions are met, return true
    return true;
}
