// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Folder extends SObject 
{
    AccessType?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DeveloperName?: string;
    Folder?: Dashboard;
    IsReadonly?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    NamespacePrefix?: string;
    Owner?: Report;
    Parent?: Folder;
    ParentId?: string;
    SubFolders?: Folder[];
    SystemModstamp?: string;
    Type?: string;
}