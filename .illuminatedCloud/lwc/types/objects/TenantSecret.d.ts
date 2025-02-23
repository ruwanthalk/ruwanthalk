// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface TenantSecret extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    IsDeleted?: boolean;
    KeyDerivationMode?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    SecretValue?: string;
    SecretValueCertificate?: string;
    SecretValueHash?: string;
    Source?: string;
    Status?: string;
    SystemModstamp?: string;
    Type?: string;
    Version?: number;
}