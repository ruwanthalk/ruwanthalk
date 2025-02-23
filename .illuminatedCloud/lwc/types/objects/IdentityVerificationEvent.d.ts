// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface IdentityVerificationEvent extends SObject 
{
    Activity?: string;
    City?: string;
    Country?: string;
    CountryIso?: string;
    CreatedDate?: string;
    EventDate?: string;
    EventGroup?: string;
    EventIdentifier?: string;
    Latitude?: number;
    LoginHistory?: LoginHistory;
    LoginHistoryId?: string;
    LoginKey?: string;
    Longitude?: number;
    Policy?: string;
    PostalCode?: string;
    Remarks?: string;
    Resource?: ConnectedApplication;
    ResourceId?: string;
    SessionKey?: string;
    SessionLevel?: string;
    SourceIp?: string;
    Status?: string;
    Subdivision?: string;
    User?: User;
    UserId?: string;
    Username?: string;
    VerificationMethod?: string;
}