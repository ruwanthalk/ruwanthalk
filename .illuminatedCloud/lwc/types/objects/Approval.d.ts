// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Approval extends SObject 
{
    ApproveComment?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Owner?: User;
    OwnerId?: string;
    Parent?: Contract;
    ParentId?: string;
    RelatedRecord?: FlowRecordRelation;
    RequestComment?: string;
    Status?: string;
    SystemModstamp?: string;
}