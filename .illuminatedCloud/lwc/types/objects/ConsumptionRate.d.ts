// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ConsumptionRate extends SObject 
{
    ConsumptionSchedule?: ConsumptionSchedule;
    ConsumptionScheduleId?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    Histories?: ConsumptionRateHistory[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LowerBound?: number;
    Name?: string;
    Price?: number;
    PricingMethod?: string;
    ProcessingOrder?: number;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    RelatedRecord?: FlowRecordRelation;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    UpperBound?: number;
}