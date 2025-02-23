// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface LoginAsEventStream extends SObject 
{
    Application?: string;
    Browser?: string;
    CreatedDate?: string;
    DelegatedOrganizationId?: string;
    DelegatedUsername?: string;
    EventDate?: string;
    EventIdentifier?: string;
    EventUuid?: string;
    LoginAsCategory?: string;
    LoginHistory?: LoginHistory;
    LoginHistoryId?: string;
    LoginKey?: string;
    LoginType?: string;
    Platform?: string;
    ReplayId?: string;
    SessionKey?: string;
    SessionLevel?: string;
    SourceEvent?: AsyncOperationEvent;
    SourceIp?: string;
    TargetUrl?: string;
    User?: User;
    UserId?: string;
    Username?: string;
    UserType?: string;
}