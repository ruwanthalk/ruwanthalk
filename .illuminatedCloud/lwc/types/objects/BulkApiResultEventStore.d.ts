// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface BulkApiResultEventStore extends SObject 
{
    CreatedDate?: string;
    EvaluationTime?: number;
    EventDate?: string;
    EventIdentifier?: string;
    LoginHistory?: LoginHistory;
    LoginHistoryId?: string;
    LoginKey?: string;
    Policy?: TransactionSecurityPolicy;
    PolicyId?: string;
    PolicyOutcome?: string;
    Query?: string;
    RelatedEventIdentifier?: string;
    SessionKey?: string;
    SessionLevel?: string;
    SourceIp?: string;
    User?: User;
    UserId?: string;
    Username?: string;
}