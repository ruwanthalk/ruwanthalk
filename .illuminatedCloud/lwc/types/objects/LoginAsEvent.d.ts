// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface LoginAsEvent extends SObject 
{
    Application?: string;
    Browser?: string;
    CreatedDate?: string;
    DelegatedOrganizationId?: string;
    DelegatedUsername?: string;
    EventDate?: string;
    EventIdentifier?: string;
    LoginAsCategory?: string;
    LoginHistory?: SObject;
    LoginHistoryId?: string;
    LoginKey?: string;
    LoginType?: string;
    Platform?: string;
    SessionKey?: string;
    SessionLevel?: string;
    SourceIp?: string;
    TargetUrl?: string;
    User?: User;
    UserId?: string;
    Username?: string;
    UserType?: string;
}