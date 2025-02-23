// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ReportAnomalyEvent extends SObject 
{
    CreatedDate?: string;
    EvaluationTime?: number;
    EventDate?: string;
    EventIdentifier?: string;
    EventUuid?: string;
    LoginKey?: string;
    Policy?: TransactionSecurityPolicy;
    PolicyId?: string;
    PolicyOutcome?: string;
    ReplayId?: string;
    Report?: string;
    Score?: number;
    SecurityEventData?: string;
    SessionKey?: string;
    SourceEvent?: AsyncOperationEvent;
    SourceIp?: string;
    Summary?: string;
    User?: User;
    UserId?: string;
    Username?: string;
}