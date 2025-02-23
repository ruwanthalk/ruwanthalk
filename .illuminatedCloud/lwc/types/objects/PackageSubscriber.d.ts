// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface PackageSubscriber extends SObject 
{
    CustomUpgradeType?: string;
    HasRestrictionEnabled?: boolean;
    InstalledStatus?: string;
    InstanceName?: string;
    IsCustomUpgradeAllowed?: boolean;
    MetadataPackage?: MetadataPackage;
    MetadataPackageId?: string;
    MetadataPackageVersion?: MetadataPackageVersion;
    MetadataPackageVersionId?: string;
    OrgKey?: string;
    OrgName?: string;
    OrgStatus?: string;
    OrgType?: string;
    ParentOrg?: string;
    SystemModstamp?: string;
}