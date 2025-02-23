// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OrderHistory extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DataType?: string;
    Field?: string;
    IsDeleted?: boolean;
    NewValue?: any;
    OldValue?: any;
    Order?: Order;
    OrderId?: string;
}