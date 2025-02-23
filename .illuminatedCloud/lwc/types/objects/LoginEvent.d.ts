// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface LoginEvent extends SObject 
{
    AdditionalInfo?: string;
    ApiType?: string;
    ApiVersion?: string;
    Application?: string;
    AuthMethodReference?: string;
    AuthService?: SObject;
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
    ForwardedForIp?: string;
    HttpMethod?: string;
    LoginGeo?: SObject;
    LoginGeoId?: string;
    LoginHistory?: SObject;
    LoginHistoryId?: string;
    LoginKey?: string;
    LoginLatitude?: number;
    LoginLongitude?: number;
    LoginSubType?: string;
    LoginType?: string;
    LoginUrl?: string;
    Network?: Network;
    NetworkId?: string;
    Platform?: string;
    Policy?: TransactionSecurityPolicy;
    PolicyId?: string;
    PolicyOutcome?: string;
    PostalCode?: string;
    RelatedEventIdentifier?: string;
    SessionKey?: string;
    SessionLevel?: string;
    SourceIp?: string;
    Status?: string;
    Subdivision?: string;
    TlsProtocol?: string;
    User?: User;
    UserId?: string;
    Username?: string;
    UserType?: string;
}