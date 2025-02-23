// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface UriEventStream extends SObject 
{
    CreatedDate?: string;
    EventDate?: string;
    EventIdentifier?: string;
    EventUuid?: string;
    LoginKey?: string;
    Message?: string;
    Name?: string;
    Operation?: string;
    OperationStatus?: string;
    QueriedEntities?: string;
    RecordId?: string;
    RelatedEventIdentifier?: string;
    ReplayId?: string;
    SessionKey?: string;
    SessionLevel?: string;
    SourceEvent?: AsyncOperationEvent;
    SourceIp?: string;
    User?: User;
    UserId?: string;
    Username?: string;
    UserType?: string;
}