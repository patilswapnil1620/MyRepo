import { LightningElement,wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
export default class accountRerordList extends LightningElement {
    @wire(getAccounts) accounts;
    accountidfrmparent;
    handleClick(event){
        event.preventDefault();     
        this.accountidfrmparent = event.target.dataset.accountid;       
    }
}