import {LightningElement,api,wire} from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';
import {registerListener, unregisterAllListner} from 'c/pubsub';

export default class Child3 extends LightningElement{

    @wire(CurrentPageReference) pageRef;
    @api output;

    connectedCallback()
    {
        console.log('Registering event');
        registerListener('PubSubc2Toc3', this.handleMessageFromC3.bind(this) , this);
    }
    @api messageToDisplay(strMessage)
    {
        this.output = strMessage;
    }
    handleMessageFromC3(strMessage)
    {
        console.log('message recieved from C2');
        this.output = strMessage;
    }

    disconnectedCallback()
    {
        unregisterAllListner(this);
    }
}