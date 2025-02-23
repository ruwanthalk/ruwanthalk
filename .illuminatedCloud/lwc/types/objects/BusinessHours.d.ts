// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface BusinessHours extends SObject 
{
    BusinessHours?: CaseChangeEvent;
    Cases?: Case[];
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    FridayEndTime?: Time;
    FridayStartTime?: Time;
    IsActive?: boolean;
    IsDefault?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastViewedDate?: string;
    MondayEndTime?: Time;
    MondayStartTime?: Time;
    Name?: string;
    SaturdayEndTime?: Time;
    SaturdayStartTime?: Time;
    SundayEndTime?: Time;
    SundayStartTime?: Time;
    SystemModstamp?: string;
    ThursdayEndTime?: Time;
    ThursdayStartTime?: Time;
    TimeZoneSidKey?: string;
    TuesdayEndTime?: Time;
    TuesdayStartTime?: Time;
    WednesdayEndTime?: Time;
    WednesdayStartTime?: Time;
}