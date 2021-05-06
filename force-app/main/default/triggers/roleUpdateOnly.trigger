/**
 * Created by ruwan on 11/18/2017.
 */

Trigger roleUpdateOnly on OpportunityTeamMember (after update) {


    Set<Id> setOpptyIdsUpdateOnly = new Set<Id>();


    for(OpportunityTeamMember optm: Trigger.new) {
        if(trigger.isUpdate){

            String oldRole = trigger.OldMap.get(optm.Id).TeamMemberRole;
            if(oldRole == 'specific role' || optm.TeamMemberRole == 'specific role') {
                setOpptyIdsUpdateOnly.add(optm.OpportunityId);
            }
        }
    }

    List<Opportunity> listOpps= [Select id,
    (Select id from OpportunityTeamMembers WHERE TeamMemberRole = 'specific role')
    from Opportunity where Id in : setOpptyIdsUpdateOnly];

    for(Opportunity opp :listOpps) {

//        opp.Counter_specific_role__c = opp.opportunityTeamMembers.size();
    }
    update listOpps;

    //------------------------

    if(Trigger.isAfter){

    }

}