// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OrgLifecycleNotification extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    EventUuid?: string;
    LifecycleRequestId?: string;
    LifecycleRequestType?: string;
    OrgId?: string;
    ReplayId?: string;
    SourceEvent?: AsyncOperationEvent;
    Status?: string;
    StatusCode?: string;
}