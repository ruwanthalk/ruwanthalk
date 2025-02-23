// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface LightningUriEventStream extends SObject 
{
    AppName?: string;
    ConnectionType?: string;
    CreatedDate?: string;
    DeviceId?: string;
    DeviceModel?: string;
    DevicePlatform?: string;
    DeviceSessionId?: string;
    Duration?: number;
    EffectivePageTime?: number;
    EffectivePageTimeDeviationErrorType?: string;
    EffectivePageTimeDeviationReason?: string;
    EventDate?: string;
    EventIdentifier?: string;
    EventUuid?: string;
    HasEffectivePageTimeDeviation?: boolean;
    LoginKey?: string;
    Operation?: string;
    OsName?: string;
    OsVersion?: string;
    PageStartTime?: string;
    PageUrl?: string;
    PreviousPageAppName?: string;
    PreviousPageEntityId?: string;
    PreviousPageEntityType?: string;
    PreviousPageUrl?: string;
    QueriedEntities?: string;
    RecordId?: string;
    RelatedEventIdentifier?: string;
    ReplayId?: string;
    SdkAppType?: string;
    SdkAppVersion?: string;
    SdkVersion?: string;
    SessionKey?: string;
    SessionLevel?: string;
    SourceEvent?: AsyncOperationEvent;
    SourceIp?: string;
    User?: User;
    UserAgent?: string;
    UserId?: string;
    Username?: string;
    UserType?: string;
}