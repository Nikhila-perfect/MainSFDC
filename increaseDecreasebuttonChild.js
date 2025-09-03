import { LightningElement } from 'lwc';

export default class IncreaseDecreasebuttonChild extends LightningElement {
 currentValue = 0;

    onIncreementHandler(event)
    {
        this.currentValue = this.currentValue + 1;
        this.toDispatchEvent();
    }

    OnDecreementHandler(event)
    {
        if(this.currentValue > 0)
        {
            this.currentValue = this.currentValue - 1;
            this.toDispatchEvent(); 
        }
        else{
            alert('No Negative Values allowed');
        }

    }

    toDispatchEvent()
    {
     const event = new CustomEvent('changevalue', {
         detail: this.currentValue
     });
         this.dispatchEvent(event);
    }
}