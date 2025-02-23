// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ListViewEvent extends SObject 
{
    AppName?: string;
    ColumnHeaders?: string;
    CreatedDate?: string;
    DeveloperName?: string;
    EvaluationTime?: number;
    EventDate?: string;
    EventIdentifier?: string;
    EventSource?: string;
    ExecutionIdentifier?: string;
    FilterCriteria?: JSON;
    ListView?: ListView;
    ListViewId?: string;
    LoginHistory?: LoginHistory;
    LoginHistoryId?: string;
    LoginKey?: string;
    Name?: string;
    NumberOfColumns?: number;
    OrderBy?: string;
    Owner?: SObject;
    OwnerId?: string;
    Policy?: TransactionSecurityPolicy;
    PolicyId?: string;
    PolicyOutcome?: string;
    QueriedEntities?: string;
    Records?: JSON;
    RelatedEventIdentifier?: string;
    RowsProcessed?: number;
    Scope?: string;
    Sequence?: number;
    SessionKey?: string;
    SessionLevel?: string;
    SourceIp?: string;
    User?: User;
    UserId?: string;
    Username?: string;
}