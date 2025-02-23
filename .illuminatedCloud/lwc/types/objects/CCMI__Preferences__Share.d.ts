// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CCMI__Preferences__Share extends SObject 
{
    AccessLevel?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Parent?: Preferences__c;
    ParentId?: string;
    RowCause?: string;
    UserOrGroup?: SObject;
    UserOrGroupId?: string;
}