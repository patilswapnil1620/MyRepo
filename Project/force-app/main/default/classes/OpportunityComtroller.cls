public with sharing class OpportunityComtroller {
@AuraEnabled(Cacheable=true)
public static List<Opportunity> findOpportunitybyAccount(string accountId) {
return [Select Id, Name, Type, StageName from Opportunity WHERE AccountId =:accountId limit 10];
}
}