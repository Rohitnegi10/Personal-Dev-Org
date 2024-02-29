import {LightningElement} from 'lwc';

export default class extends LightningElement{

    eventName = 'Click button to fire event'
    handleClick(){
        this.eventName = 'Child Button Clicked'
        this.dispatchEvent(
            new CustomEvent('clicked',{detail: 'hello there'}
        ));
        console.log('event dispatched');
    }
}