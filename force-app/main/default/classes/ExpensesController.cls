/**
 * Created by Ruwantha.Lankathilak on 7/21/2017.
 */

public with sharing class ExpensesController {


    @AuraEnabled
    public static List<Expense__c> getExpenses() {

        List<String> filedsToCheck = new List<String>{'Id', 'Name', 'Amount__c', 'Client__c',
                'Date__c','Reimbursed__c', 'CreatedDate'};

        Map<String,Schema.SobjectField> fieldDescribeTokens = Schema.SObjectType.Expense__c.fields.getMap();

        for(String field : fieldDescribeTokens.keySet()){

            if(!fieldDescribeTokens.get(field).getDescribe().isAccessible()){

                throw new System.NoAccessException();
                return null;
            }
        }
        return [SELECT Id, Name, Amount__c, Client__c, Date__c,Reimbursed__c, CreatedDate FROM Expense__c];
    }
    
    @AuraEnabled
    public static Expense__c saveExpense(Expense__c expense) {
        // Perform isUpdatable() checking first, then
        System.debug('cccccccccccc' + expense);
        upsert expense;
        return expense;
    }
}