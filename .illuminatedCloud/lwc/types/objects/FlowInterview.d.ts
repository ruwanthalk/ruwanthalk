// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FlowInterview extends SObject 
{
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CurrentElement?: string;
    EngineType?: string;
    Error?: string;
    FlowVersionView?: FlowVersionView;
    FlowVersionViewId?: string;
    Guid?: string;
    Interview?: FlowOrchestrationInstance;
    InterviewLabel?: string;
    InterviewStatus?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    PauseLabel?: string;
    RecordActions?: RecordAction[];
    RecordRelations?: FlowRecordRelation[];
    Shares?: FlowInterviewShare[];
    StageRelations?: FlowStageRelation[];
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    WasPausedFromScreen?: boolean;
}