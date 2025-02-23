// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface SessionHijackingEvent extends SObject 
{
    CreatedDate?: string;
    CurrentIp?: string;
    CurrentPlatform?: string;
    CurrentScreen?: string;
    CurrentUserAgent?: string;
    CurrentWindow?: string;
    EvaluationTime?: number;
    EventDate?: string;
    EventIdentifier?: string;
    EventUuid?: string;
    LoginKey?: string;
    Policy?: TransactionSecurityPolicy;
    PolicyId?: string;
    PolicyOutcome?: string;
    PreviousIp?: string;
    PreviousPlatform?: string;
    PreviousScreen?: string;
    PreviousUserAgent?: string;
    PreviousWindow?: string;
    ReplayId?: string;
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