// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface UserServicePresenceChangeEvent extends SObject 
{
    AtCapacityDuration?: number;
    AverageCapacity?: number;
    ChangeEventHeader?: ChangeEventHeader;
    ConfiguredCapacity?: number;
    ConfiguredInterruptCapacity?: number;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    IdleDuration?: number;
    IsAway?: boolean;
    IsCurrentState?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Owner?: User;
    OwnerId?: string;
    ReplayId?: string;
    ServicePresenceStatus?: ServicePresenceStatus;
    ServicePresenceStatusId?: string;
    StatusDuration?: number;
    StatusEndDate?: string;
    StatusStartDate?: string;
    User?: User;
    UserId?: string;
}