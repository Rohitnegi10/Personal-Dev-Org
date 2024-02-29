import { LightningElement } from 'lwc';

export default class Child2 extends LightningElement {
    eventNumber = 1;

    handleNumberChange(event) {
        console.log('handle change number:'+ event.detail.value);
        this.eventNumber = event.detail.value;
    }

    handleClick() {
        console.log('number: '+ this.eventNumber);
        this.dispatchEvent(
            new CustomEvent('clicked2', { detail: this.eventNumber } 
        ));
    }

}