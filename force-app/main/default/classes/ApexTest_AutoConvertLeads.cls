/**
 * Created by ruwan on 11/18/2017.
 */
@IsTest(SeeAllData = true)
public with sharing class ApexTest_AutoConvertLeads {
// Add a test with feature 1 and 2 and 3 and 4 ss
    static testMethod void testLeads(){


        Map<Id,Lead> idLeadMap = new Map<Id, Lead>([SELECT Id FROM Lead LIMIT 1000]);

        AutoConvertLeads.LeadAssign(new List<Id>(idLeadMap.keySet()));
    }
}
