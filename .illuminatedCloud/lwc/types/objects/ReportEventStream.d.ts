// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ReportEventStream extends SObject 
{
    ColumnHeaders?: string;
    CreatedDate?: string;
    DashboardId?: string;
    DashboardName?: string;
    Description?: string;
    DisplayedFieldEntities?: string;
    EvaluationTime?: number;
    EventDate?: string;
    EventIdentifier?: string;
    EventSource?: string;
    EventUuid?: string;
    ExecutionIdentifier?: string;
    ExportFileFormat?: string;
    Format?: string;
    GroupedColumnHeaders?: string;
    IsScheduled?: boolean;
    LoginHistory?: LoginHistory;
    LoginHistoryId?: string;
    LoginKey?: string;
    Name?: string;
    NumberOfColumns?: number;
    Operation?: string;
    OwnerId?: string;
    Policy?: TransactionSecurityPolicy;
    PolicyId?: string;
    PolicyOutcome?: string;
    QueriedEntities?: string;
    Records?: JSON;
    RelatedEventIdentifier?: string;
    ReplayId?: string;
    ReportId?: string;
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