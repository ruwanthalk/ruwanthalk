// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface UserLicense extends SObject 
{
    CreatedDate?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    LastModifiedDate?: string;
    License?: PermissionSet;
    LicenseDefinitionKey?: string;
    MasterLabel?: string;
    MonthlyLoginsEntitlement?: number;
    MonthlyLoginsUsed?: number;
    Name?: string;
    Status?: string;
    SystemModstamp?: string;
    TotalLicenses?: number;
    UsedLicenses?: number;
    UsedLicensesLastUpdated?: string;
    UserLicense?: ActiveProfileMetric;
}