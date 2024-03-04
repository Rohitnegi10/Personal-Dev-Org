import { LightningElement, wire } from 'lwc';
import {CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';

export default class Child2 extends LightningElement {
    @wire(CurrentPageReference) pageRef;
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

        fireEvent(this.pageRef, 'PubSubc2Toc3', this.eventNumber);
    }

}