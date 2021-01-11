import { LightningElement , track } from 'lwc';

export default class Subscriber extends LightningElement {

    @track itemList = [];

    connectedCallback(){
        window.addEventListener('message', this.handleMessage, false);
    }

    handleMessage = (event) => {
        let detail = event.detail.value;
        this.itemList.push(detail);
    }

    disconnectedCallback(){
        window.removeEventListener('message', this.handleMessage, false);
    }

    get showItemList(){
        return this.itemList.length >= 1;
    }
}