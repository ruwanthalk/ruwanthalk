// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Attachment extends SObject 
{
    Body?: string;
    BodyLength?: number;
    ContentType?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    IsDeleted?: boolean;
    IsPrivate?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    Parent?: SObject;
    ParentId?: string;
    RelatedRecord?: FlowRecordRelation;
    SystemModstamp?: string;
}