// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Product2ChangeEvent extends SObject 
{
    CanUseRevenueSchedule?: boolean;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    DisplayUrl?: string;
    ExternalDataSource?: ExternalDataSource;
    ExternalDataSourceId?: string;
    ExternalId?: string;
    Family?: string;
    IsActive?: boolean;
    IsArchived?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    NumberOfRevenueInstallments?: number;
    ProductCode?: string;
    QuantityUnitOfMeasure?: string;
    ReplayId?: string;
    RevenueInstallmentPeriod?: string;
    RevenueScheduleType?: string;
    StockKeepingUnit?: string;
}