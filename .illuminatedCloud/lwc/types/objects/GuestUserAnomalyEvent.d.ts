// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface GuestUserAnomalyEvent extends SObject 
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
    RequestedEntities?: string;
    Score?: number;
    SecurityEventData?: string;
    SessionKey?: string;
    SoqlCommands?: string;
    SourceEvent?: AsyncOperationEvent;
    SourceIp?: string;
    Summary?: string;
    TotalControllerEvents?: number;
    User?: User;
    UserAgent?: string;
    UserId?: string;
    Username?: string;
    UserType?: string;
}