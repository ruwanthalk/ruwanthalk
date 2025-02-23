// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface QuickText extends SObject 
{
    Category?: string;
    Channel?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    Histories?: QuickTextHistory[];
    IsDeleted?: boolean;
    IsInsertable?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    Message?: string;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    QuickText?: QuickTextUsage;
    RelatedRecord?: FlowRecordRelation;
    Shares?: QuickTextShare[];
    SourceType?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}