import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    eventName;
    eventName2;

    handleButtonClicked2(event) {
        console.log('event detail -- child2:'+ event.detail);
        this.eventName2 = 'Child2 Button Clicked: ' + event.detail;
        console.log('Child2 Button Clicked');
    }


    handleButtonClicked(event) {
        this.eventName = 'Child button clicked';
        console.log('Simple Child Button Clicked');
    }
}