// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ListViewEventStream extends SObject 
{
    AppName?: string;
    ColumnHeaders?: string;
    CreatedDate?: string;
    DeveloperName?: string;
    EvaluationTime?: number;
    EventDate?: string;
    EventIdentifier?: string;
    EventSource?: string;
    EventUuid?: string;
    ExecutionIdentifier?: string;
    FilterCriteria?: JSON;
    ListViewId?: string;
    LoginHistory?: LoginHistory;
    LoginHistoryId?: string;
    LoginKey?: string;
    Name?: string;
    NumberOfColumns?: number;
    OrderBy?: string;
    OwnerId?: string;
    Policy?: TransactionSecurityPolicy;
    PolicyId?: string;
    PolicyOutcome?: string;
    QueriedEntities?: string;
    Records?: JSON;
    RelatedEventIdentifier?: string;
    ReplayId?: string;
    RowsProcessed?: number;
    Scope?: string;
    Sequence?: number;
    SessionKey?: string;
    SessionLevel?: string;
    SourceEvent?: AsyncOperationEvent;
    SourceIp?: string;
    User?: User;
    UserId?: string;
    Username?: string;
}