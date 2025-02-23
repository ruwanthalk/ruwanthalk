// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ApiAnomalyEvent extends SObject 
{
    CreatedDate?: string;
    EvaluationTime?: number;
    EventDate?: string;
    EventIdentifier?: string;
    EventUuid?: string;
    LoginKey?: string;
    Operation?: string;
    Policy?: TransactionSecurityPolicy;
    PolicyId?: string;
    PolicyOutcome?: string;
    QueriedEntities?: string;
    ReplayId?: string;
    RequestIdentifier?: string;
    RowsProcessed?: number;
    Score?: number;
    SecurityEventData?: string;
    SessionKey?: string;
    SourceEvent?: AsyncOperationEvent;
    SourceIp?: string;
    Summary?: string;
    Uri?: string;
    User?: User;
    UserAgent?: string;
    UserId?: string;
    Username?: string;
}