// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface UserAppMenuItem extends SObject 
{
    Application?: SObject;
    ApplicationId?: string;
    AppMenuItemId?: string;
    Description?: string;
    IconUrl?: string;
    InfoUrl?: string;
    IsUsingAdminAuthorization?: boolean;
    IsVisible?: boolean;
    Label?: string;
    LogoUrl?: string;
    MobileStartUrl?: string;
    Name?: string;
    SortOrder?: number;
    StartUrl?: string;
    Type?: string;
    UserSortOrder?: number;
}