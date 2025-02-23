// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Macro extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    Histories?: MacroHistory[];
    IsAlohaSupported?: boolean;
    IsDeleted?: boolean;
    IsLightningSupported?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    Macro?: MacroInstruction;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    RelatedRecord?: FlowRecordRelation;
    Shares?: MacroShare[];
    StartingContext?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}