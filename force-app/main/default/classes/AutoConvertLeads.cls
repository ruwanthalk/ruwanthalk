/**
 * Created by ruwan on 11/18/2017.
 */

Public class AutoConvertLeads
{
    @InvocableMethod
    public static void LeadAssign(List<Id> LeadIds)
    {
        Database.LeadConvert Leadconvert = new Database.LeadConvert();
        Leadconvert.setLeadId(LeadIds[0]);
        LeadStatus Leads= [SELECT Id, MasterLabel FROM LeadStatus WHERE IsConverted=true LIMIT 1];
        Leadconvert.setConvertedStatus(Leads.MasterLabel);
        Leadconvert.setDoNotCreateOpportunity(TRUE);
        Database.LeadConvertResult Leadconverts = Database.convertLead(Leadconvert);
        System.assert(Leadconverts.isSuccess());
    }
}