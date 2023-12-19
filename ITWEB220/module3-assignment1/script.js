class Contact {
    constructor(name, address, phone) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
}

function getContactInfo() {
    let name = prompt("Enter contact name:");
    let address = prompt("Enter contact address:");
    let phone = prompt("Enter contact phone:");

    return new Contact(name, address, phone);
}

function sortContactsByName(contacts) {
    return contacts.sort((a, b) => a.name.localeCompare(b.name));
}

function main() {
    const maxContacts = 10;
    let contacts = [];

    while (contacts.length < maxContacts) {
        let contact = getContactInfo();
        contacts.push(contact);

        let addMore = confirm("Do you want to add more contacts?");
        if (!addMore) {
            break;
        }
    }

    if (contacts.length === maxContacts) {
        alert("Maximum number of contacts reached (" + maxContacts +" contacts).");
    }

    contacts = sortContactsByName(contacts);

    console.log("Sorted Contacts:");
    for (let contact of contacts) {
        console.log(`Name: ${contact.name}, Address: ${contact.address}, Phone: ${contact.phone}`);
    }
}

main();