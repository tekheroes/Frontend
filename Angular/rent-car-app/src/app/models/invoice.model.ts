import { Customer } from "./customer.model";
import { Vehicle } from "./vehicle.model";

export class Invoice {
    id : number = 0;
    hireDate : Date = new Date();
    days : number = 0;
    total : number = 0;
    returned : boolean = false;
    customer : Customer = new Customer();
    vehicle : Vehicle = new Vehicle();
}
