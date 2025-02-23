// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface DuplicateRule extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DeveloperName?: string;
    DuplicateRecordSets?: DuplicateRecordSet[];
    IsActive?: boolean;
    IsDeleted?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastViewedDate?: string;
    MasterLabel?: string;
    NamespacePrefix?: string;
    SobjectSubtype?: string;
    SystemModstamp?: string;
}