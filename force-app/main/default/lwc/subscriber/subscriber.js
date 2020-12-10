import { LightningElement } from 'lwc';

export default class Subscriber extends LightningElement {

    connectedCallback(){
        this.handleMessage = this.handleMessage.bind(this);
        window.addEventListener("message", this.handleMessage, false);
    }

    handleMessage(event){
        console.log('message recieved')
    }

}