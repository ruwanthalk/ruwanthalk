// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface IdentityProviderEventStore extends SObject 
{
    App?: ConnectedApplication;
    AppId?: string;
    AuthSession?: AuthSession;
    AuthSessionId?: string;
    CreatedDate?: string;
    ErrorCode?: string;
    EventDate?: string;
    EventIdentifier?: string;
    HasLogoutUrl?: boolean;
    IdentityUsed?: string;
    InitiatedBy?: string;
    SamlEntityUrl?: string;
    SsoType?: string;
    User?: User;
    UserId?: string;
}