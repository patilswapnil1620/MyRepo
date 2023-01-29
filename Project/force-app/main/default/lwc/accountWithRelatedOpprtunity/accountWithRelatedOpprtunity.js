import { LightningElement, wire, api} from 'lwc';
import findOpportunitybyAccount from '@salesforce/apex/OpportunityComtroller.findOpportunitybyAccount';
export default class accountWithRelatedOpportunity extends LightningElement {
   // @track data;
    columns = [
        { label: 'Name', fieldName: 'Name', type: 'text' },        
        { label: 'Type', fieldName: 'Type', type: 'text' },
        { label: 'Stage', fieldName: 'StageName', type: 'text' },       
    ];    
    @api accountId;
    @wire(findOpportunitybyAccount,{accountId:'$accountId'}) Opportunities;   
}