// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface LoginEventStream extends SObject 
{
    AdditionalInfo?: string;
    ApiType?: string;
    ApiVersion?: string;
    Application?: string;
    AuthMethodReference?: string;
    AuthServiceId?: string;
    Browser?: string;
    CipherSuite?: string;
    City?: string;
    ClientVersion?: string;
    Country?: string;
    CountryIso?: string;
    CreatedDate?: string;
    EvaluationTime?: number;
    EventDate?: string;
    EventIdentifier?: string;
    EventUuid?: string;
    ForwardedForIp?: string;
    HttpMethod?: string;
    LoginGeoId?: string;
    LoginHistory?: LoginHistory;
    LoginHistoryId?: string;
    LoginKey?: string;
    LoginLatitude?: number;
    LoginLongitude?: number;
    LoginSubType?: string;
    LoginType?: string;
    LoginUrl?: string;
    NetworkId?: string;
    Platform?: string;
    Policy?: TransactionSecurityPolicy;
    PolicyId?: string;
    PolicyOutcome?: string;
    PostalCode?: string;
    RelatedEventIdentifier?: string;
    ReplayId?: string;
    SessionKey?: string;
    SessionLevel?: string;
    SourceEvent?: AsyncOperationEvent;
    SourceIp?: string;
    Status?: string;
    Subdivision?: string;
    TlsProtocol?: string;
    User?: User;
    UserId?: string;
    Username?: string;
    UserType?: string;
}