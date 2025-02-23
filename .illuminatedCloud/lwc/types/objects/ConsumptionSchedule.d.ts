// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ConsumptionSchedule extends SObject 
{
    AttachedContentDocuments?: AttachedContentDocument[];
    BillingTerm?: number;
    BillingTermUnit?: string;
    CombinedAttachments?: CombinedAttachment[];
    ConsumptionRates?: ConsumptionRate[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    Feeds?: ConsumptionScheduleFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    Histories?: ConsumptionScheduleHistory[];
    IsActive?: boolean;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    MatchingAttribute?: string;
    Name?: string;
    NumberOfRates?: number;
    Owner?: SObject;
    OwnerId?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    ProductConsumptionSchedules?: ProductConsumptionSchedule[];
    RatingMethod?: string;
    RelatedRecord?: FlowRecordRelation;
    Shares?: ConsumptionScheduleShare[];
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    Type?: string;
    UnitOfMeasure?: string;
}