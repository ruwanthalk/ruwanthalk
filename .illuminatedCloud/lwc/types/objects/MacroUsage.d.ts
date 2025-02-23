// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface MacroUsage extends SObject 
{
    AppContext?: string;
    ConditionCount?: number;
    ContextRecord?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DurationInMs?: number;
    ExecutedInstructionCount?: number;
    ExecutionEndTime?: string;
    ExecutionState?: string;
    FailureReason?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    InstructionCount?: number;
    IsDeleted?: boolean;
    IsFromBulk?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Macro?: Macro;
    MacroId?: string;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: FlowRecordRelation;
    Shares?: MacroUsageShare[];
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    User?: User;
    UserId?: string;
}