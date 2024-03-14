import { LightningElement } from 'lwc';
import DemoLabel from '@salesforce/label/c.Demo_Label';
export default class HelloWebComponent extends LightningElement {
    greeting  = 'Trailblazer';
    
    
    currentDate = new Date().toDateString();
    get capitalizedGreeting() {
	    return `Hello ${this.greeting.toUpperCase()}!`;
    }

    handleGreetingChange(event) {
        this.greeting = event.target.value;
    }
}