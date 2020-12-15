import { LightningElement, track } from 'lwc';

export default class Subscriber extends LightningElement {

   @track itemList = [];

    connectedCallback(){
        this.handleMessage = this.handleMessage.bind(this);
        window.addEventListener('message',this.handleMessage, false);
    }

    handleMessage(event){
        let detail = event.detail.value;
        this.itemList.push(detail);
    }

    get showItemList(){
        return this.itemList.length >= 1;
    }

}