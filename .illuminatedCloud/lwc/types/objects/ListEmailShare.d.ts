// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ListEmailShare extends SObject 
{
    AccessLevel?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Parent?: ListEmail;
    ParentId?: string;
    RowCause?: string;
    UserOrGroup?: SObject;
    UserOrGroupId?: string;
}