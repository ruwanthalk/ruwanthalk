// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface AssetChangeEvent extends SObject 
{
    Account?: Account;
    AccountId?: string;
    Address?: Address;
    AssetProvidedBy?: Account;
    AssetProvidedById?: string;
    AssetServicedBy?: Account;
    AssetServicedById?: string;
    ChangeEventHeader?: ChangeEventHeader;
    City?: string;
    Contact?: Contact;
    ContactId?: string;
    Country?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    DigitalAssetStatus?: string;
    ExternalIdentifier?: string;
    GeocodeAccuracy?: string;
    InstallDate?: Date;
    IsCompetitorProduct?: boolean;
    IsInternal?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Latitude?: number;
    Longitude?: number;
    ManufactureDate?: Date;
    Name?: string;
    Parent?: Asset;
    ParentId?: string;
    PostalCode?: string;
    Price?: number;
    Product2?: Product2;
    Product2Id?: string;
    PurchaseDate?: Date;
    Quantity?: number;
    ReplayId?: string;
    RootAsset?: Asset;
    RootAssetId?: string;
    SerialNumber?: string;
    State?: string;
    Status?: string;
    StatusReason?: string;
    Street?: string;
    UsageEndDate?: Date;
    Uuid?: string;
}