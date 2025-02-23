// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>MSA Terms</b></h3>
 */
declare interface CCMI__MSA_Terms__c extends SObject 
{
    AttachedContentDocuments?: AttachedContentDocument[];
    /**
     * <h3><b>Cloud Coach</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">false</code></td></tr>
     * </table>
     */
    CCMI__Cloud_Coach__c?: boolean;
    /**
     * <h3><b>Web To Lead Date</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CCMI__Web_To_Lead_Date__c?: Date;
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
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    Name?: string;
    NetworkUserHistoryRecentToRecord?: NetworkUserHistoryRecent[];
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
    SetupOwner?: SObject;
    SetupOwnerId?: string;
    Subject?: SurveySubjectChangeEvent;
    SurveySubjectEntities?: SurveySubject[];
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TaskRelations?: TaskRelation[];
    TopicAssignments?: TopicAssignment[];
    What?: EventChangeEvent;
    WorkItem?: AgentWork;
}