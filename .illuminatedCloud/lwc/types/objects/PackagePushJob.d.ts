// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface PackagePushJob extends SObject 
{
    DurationSeconds?: number;
    EndTime?: string;
    PackagePushErrors?: PackagePushError[];
    PackagePushRequest?: PackagePushRequest;
    PackagePushRequestId?: string;
    StartTime?: string;
    Status?: string;
    SubscriberOrganizationKey?: string;
    SystemModstamp?: string;
}