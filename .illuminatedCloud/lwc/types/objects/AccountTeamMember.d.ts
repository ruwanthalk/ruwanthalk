// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AccountTeamMember extends SObject 
{
    Account?: Account;
    AccountAccessLevel?: string;
    AccountId?: string;
    CaseAccessLevel?: string;
    ContactAccessLevel?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    OpportunityAccessLevel?: string;
    PhotoUrl?: string;
    RelatedRecord?: FlowRecordRelation;
    /**
     * <h3><b>Start Date</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Start_Date__c?: Date;
    SystemModstamp?: string;
    TeamMemberRole?: string;
    Title?: string;
    User?: User;
    UserId?: string;
}