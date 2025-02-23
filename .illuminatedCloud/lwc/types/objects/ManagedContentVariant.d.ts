// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ManagedContentVariant extends SObject 
{
    ContentTypeFullyQualifiedName?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    HasLocks?: boolean;
    IsDeleted?: boolean;
    IsPrimary?: boolean;
    IsPublished?: boolean;
    IsReady?: boolean;
    Language?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    ManagedContent?: ManagedContent;
    ManagedContentId?: string;
    ManagedContentKey?: string;
    ManagedContentVariantStatus?: string;
    Name?: string;
    RelatedRecord?: FlowRecordRelation;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    UrlName?: string;
    VariantType?: string;
}