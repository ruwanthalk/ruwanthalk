// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Topic extends SObject 
{
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CustomBrands?: CustomBrand[];
    Description?: string;
    Feeds?: TopicFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    ListEmailRecipientSources?: ListEmailRecipientSource[];
    ManagedTopicType?: string;
    Name?: string;
    Network?: Network;
    NetworkId?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    RelatedRecord?: FlowRecordRelation;
    SystemModstamp?: string;
    TalkingAbout?: number;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    Topic?: KnowledgeableUser;
    TopicAssignments?: TopicAssignment[];
}