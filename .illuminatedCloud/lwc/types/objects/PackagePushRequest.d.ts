// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface PackagePushRequest extends SObject 
{
    DurationSeconds?: number;
    EndTime?: string;
    PackagePushJobs?: PackagePushJob[];
    PackageVersion?: MetadataPackageVersion;
    PackageVersionId?: string;
    ScheduledStartTime?: string;
    StartTime?: string;
    Status?: string;
    SystemModstamp?: string;
}