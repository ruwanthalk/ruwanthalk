// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface MetadataPackageVersion extends SObject 
{
    BuildNumber?: number;
    IsDeprecated?: boolean;
    MajorVersion?: number;
    MetadataPackage?: MetadataPackage;
    MetadataPackageId?: string;
    MinorVersion?: number;
    Name?: string;
    PackagePushRequests?: PackagePushRequest[];
    PackageSubscribers?: PackageSubscriber[];
    PatchVersion?: number;
    ReleaseState?: string;
    SystemModstamp?: string;
}