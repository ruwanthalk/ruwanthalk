// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContractContactRole extends SObject 
{
    Contact?: Contact;
    ContactId?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    Contract?: Contract;
    ContractId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    IsDeleted?: boolean;
    IsPrimary?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    RelatedRecord?: FlowRecordRelation;
    Role?: string;
    SystemModstamp?: string;
}