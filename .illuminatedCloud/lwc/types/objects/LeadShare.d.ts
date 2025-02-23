// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface LeadShare extends SObject 
{
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Lead?: Lead;
    LeadAccessLevel?: string;
    LeadId?: string;
    RowCause?: string;
    UserOrGroup?: SObject;
    UserOrGroupId?: string;
}