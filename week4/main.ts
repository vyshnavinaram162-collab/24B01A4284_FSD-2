import { Ticket } from './TicketLogic';
import type { Passenger } from './Passenger';

// Create a passenger object based on the imported interface
const traveler: Passenger = {
    name: "Suresh Kumar",
    age: 45,
    berthPreference: "Lower"
};

// Create a ticket
const myTicket = new Ticket(traveler, 1200, 12626);

// Print the ticket
myTicket.printTicket();