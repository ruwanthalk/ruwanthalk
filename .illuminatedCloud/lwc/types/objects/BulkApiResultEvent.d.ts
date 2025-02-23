// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface BulkApiResultEvent extends SObject 
{
    CreatedDate?: string;
    EvaluationTime?: number;
    EventDate?: string;
    EventIdentifier?: string;
    EventUuid?: string;
    LoginHistory?: LoginHistory;
    LoginHistoryId?: string;
    LoginKey?: string;
    Policy?: TransactionSecurityPolicy;
    PolicyId?: string;
    PolicyOutcome?: string;
    Query?: string;
    RelatedEventIdentifier?: string;
    ReplayId?: string;
    SessionKey?: string;
    SessionLevel?: string;
    SourceEvent?: AsyncOperationEvent;
    SourceIp?: string;
    User?: User;
    UserId?: string;
    Username?: string;
}