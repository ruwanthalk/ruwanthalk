// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ApiEventStream extends SObject 
{
    AdditionalInfo?: string;
    ApiType?: string;
    ApiVersion?: number;
    Application?: string;
    Client?: string;
    ConnectedAppId?: string;
    CreatedDate?: string;
    ElapsedTime?: number;
    EvaluationTime?: number;
    EventDate?: string;
    EventIdentifier?: string;
    EventUuid?: string;
    LoginHistory?: LoginHistory;
    LoginHistoryId?: string;
    LoginKey?: string;
    Operation?: string;
    Platform?: string;
    Policy?: TransactionSecurityPolicy;
    PolicyId?: string;
    PolicyOutcome?: string;
    QueriedEntities?: string;
    Query?: string;
    Records?: JSON;
    RelatedEventIdentifier?: string;
    ReplayId?: string;
    RequestIdentifier?: string;
    RowsProcessed?: number;
    RowsReturned?: number;
    SessionKey?: string;
    SessionLevel?: string;
    SourceEvent?: AsyncOperationEvent;
    SourceIp?: string;
    User?: User;
    UserAgent?: string;
    UserId?: string;
    Username?: string;
}