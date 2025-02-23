// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FlowOrchestration extends SObject 
{
    ActiveVersion?: FlowOrchestrationVersion;
    ActiveVersionId?: string;
    ApiName?: string;
    ApiVersion?: number;
    AverageRunTime?: number;
    CompletionRate?: number;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    FailedRunCount?: number;
    FlowOrchestration?: FlowOrchestrationVersionChangeEvent;
    FlowOrchestrationVersions?: FlowOrchestrationVersion[];
    InstalledPackageName?: string;
    IsCitizenEnabled?: boolean;
    IsDeleted?: boolean;
    IsOverridable?: boolean;
    IsTemplate?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    ManageableState?: string;
    Name?: string;
    NamespacePrefix?: string;
    OrchestrationDefinition?: string;
    OrchestrationLabel?: string;
    OrchestrationType?: string;
    OverriddenBy?: FlowOrchestration;
    OverriddenById?: string;
    OverriddenOrchestration?: FlowOrchestration;
    OverriddenOrchestrationId?: string;
    RelatedRecord?: FlowRecordRelation;
    RunCount?: number;
    SourceTemplate?: FlowOrchestration;
    SourceTemplateId?: string;
    Status?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TriggerType?: string;
}