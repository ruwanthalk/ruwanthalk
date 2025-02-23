// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OpportunityContactRole extends SObject 
{
    Contact?: Contact;
    ContactId?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    IsDeleted?: boolean;
    IsPrimary?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Opportunity?: Opportunity;
    OpportunityId?: string;
    RelatedRecord?: FlowRecordRelation;
    Role?: string;
    SystemModstamp?: string;
}