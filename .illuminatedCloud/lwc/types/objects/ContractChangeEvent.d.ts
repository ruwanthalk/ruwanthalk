// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContractChangeEvent extends SObject 
{
    Account?: Account;
    AccountId?: string;
    ActivatedBy?: User;
    ActivatedById?: string;
    ActivatedDate?: string;
    BillingAddress?: Address;
    BillingCity?: string;
    BillingCountry?: string;
    BillingGeocodeAccuracy?: string;
    BillingLatitude?: number;
    BillingLongitude?: number;
    BillingPostalCode?: string;
    BillingState?: string;
    BillingStreet?: string;
    ChangeEventHeader?: ChangeEventHeader;
    CompanySigned?: User;
    CompanySignedDate?: Date;
    CompanySignedId?: string;
    ContractNumber?: string;
    ContractTerm?: number;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CustomerSigned?: Contact;
    CustomerSignedDate?: Date;
    CustomerSignedId?: string;
    CustomerSignedTitle?: string;
    Description?: string;
    EndDate?: Date;
    LastApprovedDate?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Owner?: User;
    OwnerExpirationNotice?: string;
    OwnerId?: string;
    Pricebook2?: Pricebook2;
    Pricebook2Id?: string;
    ReplayId?: string;
    ShippingAddress?: Address;
    ShippingCity?: string;
    ShippingCountry?: string;
    ShippingGeocodeAccuracy?: string;
    ShippingLatitude?: number;
    ShippingLongitude?: number;
    ShippingPostalCode?: string;
    ShippingState?: string;
    ShippingStreet?: string;
    SpecialTerms?: string;
    StartDate?: Date;
    Status?: string;
    StatusCode?: string;
}