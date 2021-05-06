/**
 * Created by Ruwantha.Lankathilak on 8/1/2017.
 */

public with sharing class CampingListController {


    @AuraEnabled
    public static List<Camping_Item__c> getItems(){

        List<Camping_Item__c> campingItems;
        List<String> fieldsToCheck = new List<String> {'Id','Name','Packed__c','Quantity__c','Price__c'};

        Map<String,Schema.SObjectField> tokenDescribeField = Schema.SObjectType.Camping_Item__c.fields.getMap();

        for(String token : fieldsToCheck){

            if(!tokenDescribeField.get(token).getDescribe().accessible){

                throw new System.NoAccessException();
                return null;
            }

        }

        campingItems = [SELECT Id,Name,Packed__c,Quantity__c,Price__c FROM Camping_Item__c];

        return campingItems;
    }

    @AuraEnabled
    public static Camping_Item__c saveItem(Camping_Item__c item){

        System.debug('itemitemitemitem '  + item);
        upsert item;
        return item;
    }

}