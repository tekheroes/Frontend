import { Invoice } from "./invoice.model";

export class Customer {
    custId : number = 0;
    name : string = '';
    phone : string = '';
    password : string = '';
    licenseNo : string = '';
    invoices : Invoice[] = [];
}
