// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface PricebookEntryChangeEvent extends SObject 
{
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    IsActive?: boolean;
    IsArchived?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Pricebook2?: Pricebook2;
    Pricebook2Id?: string;
    Product2?: Product2;
    Product2Id?: string;
    ReplayId?: string;
    UnitPrice?: number;
    UseStandardPrice?: boolean;
}