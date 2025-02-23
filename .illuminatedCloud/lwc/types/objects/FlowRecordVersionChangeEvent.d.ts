// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FlowRecordVersionChangeEvent extends SObject 
{
    ActivatedBy?: User;
    ActivatedById?: string;
    ActivatedDate?: string;
    ApiVersion?: number;
    Builder?: string;
    CapacityCategory?: string;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    FlowRecord?: FlowRecord;
    FlowRecordId?: string;
    FlowType?: string;
    IsOverridable?: boolean;
    IsPaused?: boolean;
    IsTemplate?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    OverriddenBy?: FlowRecord;
    OverriddenById?: string;
    OverriddenFlow?: FlowRecord;
    OverriddenFlowId?: string;
    PausedDate?: string;
    PausingUser?: User;
    PausingUserId?: string;
    ProgressStatus?: string;
    ReasonPaused?: string;
    ReplayId?: string;
    ResumedDate?: string;
    ResumingUser?: User;
    ResumingUserId?: string;
    RunInMode?: string;
    ScheduledStartDate?: string;
    SourceTemplate?: FlowRecord;
    SourceTemplateId?: string;
    Status?: string;
    TriggerObjectOrEventLabel?: string;
    VersionNumber?: number;
}