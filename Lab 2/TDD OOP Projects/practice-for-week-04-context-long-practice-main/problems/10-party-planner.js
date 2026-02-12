// Your code here
class PartyPlanner {
  constructor() {
    this.guestList = [];
  }
  addToGuestList(name) {
    this.guestList.push(name);
    return this.guestList;
  }
  throwParty() {
    if (this.guestList.length >= 1) {
      return `Welcome to the party ${this.guestList.join(" and ")}`;
    } else {
      return `Gotta add people to the guest list`;
    }
  }
}

const party = new PartyPlanner();

console.log(party.throwParty()); // prints "Gotta add people to the guest list"

party.addToGuestList("James");
console.log(party.throwParty()); // prints "Welcome to the party James"

party.addToGuestList("Alvin");
console.log(party.throwParty()); // prints "Welcome to the party James and Alvin"

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
  module.exports = PartyPlanner;
} catch {
  module.exports = null;
}
