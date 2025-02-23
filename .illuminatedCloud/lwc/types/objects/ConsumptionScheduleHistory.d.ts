// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ConsumptionScheduleHistory extends SObject 
{
    ConsumptionSchedule?: ConsumptionSchedule;
    ConsumptionScheduleId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DataType?: string;
    Field?: string;
    IsDeleted?: boolean;
    NewValue?: any;
    OldValue?: any;
}