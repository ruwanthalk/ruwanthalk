// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CCMI__Milestone_Phase__ChangeEvent extends SObject 
{
    /**
     * <h3><b>Project</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link CCMI__Milestone_Project__c})</td></tr>
     * </table>
     */
    CCMI__Milestone_Project__c?: string;
    /**
     * <h3><b>Project</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link CCMI__Milestone_Project__c})</td></tr>
     * </table>
     */
    CCMI__Milestone_Project__r?: CCMI__Milestone_Project__c;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    ReplayId?: string;
}