// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CredentialStuffingEvent extends SObject 
{
    AcceptLanguage?: string;
    CreatedDate?: string;
    EvaluationTime?: number;
    EventDate?: string;
    EventIdentifier?: string;
    EventUuid?: string;
    LoginKey?: string;
    LoginType?: string;
    LoginUrl?: string;
    Policy?: TransactionSecurityPolicy;
    PolicyId?: string;
    PolicyOutcome?: string;
    ReplayId?: string;
    Score?: number;
    SessionKey?: string;
    SourceEvent?: AsyncOperationEvent;
    SourceIp?: string;
    Summary?: string;
    User?: User;
    UserAgent?: string;
    UserId?: string;
    Username?: string;
}