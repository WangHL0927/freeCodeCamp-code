//Setup
var contacts = [
  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"],
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin"],
  },
  {
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile (name, prop) {
// Only change code below this line
  var firstName = null
  var value = null
  for (let i = 0; i < contacts.length; i++) {
    var contact = contacts[i]
    if (contact.firstName === name) {
      firstName = contact.firstName
      value = contact[prop]
    }
  }
  if (!firstName) {
    return "No such contact"
  }
  if (!value) {
    return "No such property"
  }
  return value

// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
