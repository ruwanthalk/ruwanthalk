// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ServiceResourceChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Owner?: User;
    OwnerId?: string;
    RelatedRecord?: User;
    RelatedRecordId?: string;
    ReplayId?: string;
    ResourceType?: string;
}