import { LightningElement } from 'lwc';

export default class IncreaseDecreaseButtonParent extends LightningElement {

    currentcount = 0;

    changeValuehandler(event)
    {
        this.currentcount = event.detail;
    }

}