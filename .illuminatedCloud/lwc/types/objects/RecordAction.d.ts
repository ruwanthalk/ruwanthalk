// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface RecordAction extends SObject 
{
    ActionDefinition?: string;
    ActionType?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    FlowDefinition?: string;
    FlowInterview?: FlowInterview;
    FlowInterviewId?: string;
    IsDeleted?: boolean;
    IsMandatory?: boolean;
    IsUiRemoveHidden?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Order?: number;
    Pinned?: string;
    Record?: SObject;
    RecordId?: string;
    RelatedRecord?: FlowRecordRelation;
    Status?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}