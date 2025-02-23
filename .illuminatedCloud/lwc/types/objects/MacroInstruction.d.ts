// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface MacroInstruction extends SObject 
{
    Context?: ExpressionFilter;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Macro?: Macro;
    MacroId?: string;
    Name?: string;
    Operation?: string;
    RelatedRecord?: FlowRecordRelation;
    SortOrder?: number;
    SystemModstamp?: string;
    Target?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    Value?: string;
    ValueRecord?: string;
}