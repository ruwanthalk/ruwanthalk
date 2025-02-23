// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AuthSession extends SObject 
{
    AuthSession?: IdentityProviderEventStore;
    CreatedDate?: string;
    IsCurrent?: boolean;
    LastModifiedDate?: string;
    LoginGeo?: LoginGeo;
    LoginGeoId?: string;
    LoginHistory?: LoginHistory;
    LoginHistoryId?: string;
    LoginType?: string;
    LogoutUrl?: string;
    NumSecondsValid?: number;
    Parent?: AuthSession;
    ParentId?: string;
    SessionPermSetActivations?: SessionPermSetActivation[];
    SessionSecurityLevel?: string;
    SessionType?: string;
    SourceIp?: string;
    Users?: User;
    UsersId?: string;
    UserType?: string;
}