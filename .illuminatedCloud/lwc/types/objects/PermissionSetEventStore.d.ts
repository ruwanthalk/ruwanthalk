// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface PermissionSetEventStore extends SObject 
{
    CreatedDate?: string;
    EvaluationTime?: number;
    EventDate?: string;
    EventIdentifier?: string;
    EventSource?: string;
    HasExternalUsers?: boolean;
    ImpactedUserIds?: JSON;
    LoginHistory?: LoginHistory;
    LoginHistoryId?: string;
    LoginKey?: string;
    Operation?: string;
    ParentIdList?: JSON;
    ParentNameList?: JSON;
    PermissionExpiration?: string;
    PermissionExpirationList?: JSON;
    PermissionList?: JSON;
    PermissionType?: string;
    Policy?: TransactionSecurityPolicy;
    PolicyId?: string;
    PolicyOutcome?: string;
    RelatedEventIdentifier?: string;
    SessionKey?: string;
    SessionLevel?: string;
    SourceIp?: string;
    User?: User;
    UserCount?: string;
    UserId?: string;
    Username?: string;
}