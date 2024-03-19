import { LightningElement, wire } from 'lwc';
import Email_FIELD from '@salesforce/schema/Contact.Email';
import FirstName_FIELD from '@salesforce/schema/Contact.FirstName';
import LastName_FIELD from '@salesforce/schema/Contact.LastName';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import { reduceErrors } from 'c/ldsUtils';

const COLUMNS = [
    { label: 'First Name', fieldName: FirstName_FIELD.fieldApiName, type: 'text' },
    { label: 'last Name ', fieldName: LastName_FIELD.fieldApiName, type: 'text' },
    { label: 'Email', fieldName: Email_FIELD.fieldApiName, type: 'text' }
];
export default class AccountList extends LightningElement {
    columns = COLUMNS;
    @wire(getContacts)
    contacts;
    get errors(){
        return(this.contacts.error)? reduceErrors(this.contacts.error) : [];
    }

}