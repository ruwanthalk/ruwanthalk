// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Cat</b></h3>
 */
declare interface Cat__c extends SObject 
{
    AttachedContentDocuments?: AttachedContentDocument[];
    Attachments?: Attachment[];
    /**
     * <h3><b>Cat Breed</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Cat_Breed__c?: string;
    CombinedAttachments?: CombinedAttachment[];
    ContactRequests?: ContactRequest[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DuplicateRecordItems?: DuplicateRecordItem[];
    EventRelations?: EventRelation[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    Name?: string;
    NetworkUserHistoryRecentToRecord?: NetworkUserHistoryRecent[];
    Notes?: Note[];
    NotesAndAttachments?: NoteAndAttachment[];
    Owner?: SObject;
    OwnerId?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    PrimaryRecord?: PendingServiceRoutingInteractionInfo;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    Record?: CollaborationGroupRecordChangeEvent;
    RecordActionHistories?: RecordActionHistory[];
    RecordActions?: RecordAction[];
    RecordAssociatedGroups?: CollaborationGroupRecord[];
    RelatedRecord?: ContentDistribution;
    RelatedTo?: EmailMessageChangeEvent;
    Relation?: EventRelationChangeEvent;
    Subject?: SurveySubjectChangeEvent;
    SurveySubjectEntities?: SurveySubject[];
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TaskRelations?: TaskRelation[];
    TopicAssignments?: TopicAssignment[];
    What?: EventChangeEvent;
    WorkItem?: AgentWork;
}