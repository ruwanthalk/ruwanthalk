// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ConcurLongRunApexErrEvent extends SObject 
{
    CreatedDate?: string;
    CurrentValue?: number;
    EventDate?: string;
    EventIdentifier?: string;
    EventUuid?: string;
    LimitValue?: number;
    LoginKey?: string;
    Quiddity?: string;
    ReplayId?: string;
    RequestId?: string;
    RequestUri?: string;
    SessionKey?: string;
    SessionLevel?: string;
    SourceEvent?: AsyncOperationEvent;
    SourceIp?: string;
    User?: User;
    UserId?: string;
    Username?: string;
}