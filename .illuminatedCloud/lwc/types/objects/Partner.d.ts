// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Partner extends SObject 
{
    AccountFrom?: Account;
    AccountFromId?: string;
    AccountTo?: Account;
    AccountToId?: string;
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
    ReversePartner?: Partner;
    ReversePartnerId?: string;
    Role?: string;
    SystemModstamp?: string;
}