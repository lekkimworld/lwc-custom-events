import { LightningElement } from 'lwc';

export default class Publisher extends LightningElement {
    handleClick(){
        console.log('firing event');
        this.dispatchEvent(
            new CustomEvent("message", {
                detail: {
                    message: 'hello'
                },
                bubbles: true,
                composed: true
            })
        );

    }

}