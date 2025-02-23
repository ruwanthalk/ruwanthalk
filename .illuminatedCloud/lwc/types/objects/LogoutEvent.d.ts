// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface LogoutEvent extends SObject 
{
    CreatedDate?: string;
    EventDate?: string;
    EventIdentifier?: string;
    LoginKey?: string;
    SessionKey?: string;
    SessionLevel?: string;
    SourceIp?: string;
    User?: User;
    UserId?: string;
    Username?: string;
}