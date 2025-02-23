// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Case extends SObject 
{
    Account?: Account;
    AccountId?: string;
    ActivityHistories?: ActivityHistory[];
    Asset?: Asset;
    AssetId?: string;
    AttachedContentDocuments?: AttachedContentDocument[];
    Attachments?: Attachment[];
    BusinessHours?: BusinessHours;
    BusinessHoursId?: string;
    Case?: CaseHistory2;
    CaseComments?: CaseComment[];
    CaseContactRoles?: CaseContactRole[];
    CaseNumber?: string;
    Cases?: Case[];
    CaseSolutions?: CaseSolution[];
    CCMI__Milestone_Projects__r?: CCMI__Milestone_Project__c[];
    CCMI__Time_Entries__r?: CCMI__Work__c[];
    ClosedDate?: string;
    CombinedAttachments?: CombinedAttachment[];
    Comments?: string;
    Contact?: Contact;
    ContactEmail?: string;
    ContactFax?: string;
    ContactId?: string;
    ContactMobile?: string;
    ContactPhone?: string;
    ContactRequests?: ContactRequest[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    EmailMessages?: EmailMessage[];
    Emails?: EmailMessage[];
    /**
     * <h3><b>Engineering Req Number</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(12)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    EngineeringReqNumber__c?: string;
    /**
     * <h3><b>Enquiry Region</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">au</code></td><td>Australia</td><td nowrap>true</td></tr>
     * </table>
     */
    Enquiry_Region__c?: string;
    EventRelations?: EventRelation[];
    Events?: Event[];
    Feeds?: CaseFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    Histories?: CaseHistory[];
    IsClosed?: boolean;
    IsClosedOnCreate?: boolean;
    IsDeleted?: boolean;
    IsEscalated?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    ListEmails?: ListEmail[];
    LiveChatTranscripts?: LiveChatTranscript[];
    MasterRecord?: Case;
    MasterRecordId?: string;
    NetworkUserHistoryRecentToRecord?: NetworkUserHistoryRecent[];
    OpenActivities?: OpenActivity[];
    Origin?: string;
    Owner?: SObject;
    OwnerId?: string;
    Parent?: Case;
    ParentEntities?: NetworkActivityAudit[];
    ParentId?: string;
    ParentRecord?: NetworkFeedResponseMetric;
    /**
     * <h3><b>Potential Liability</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">No</code></td><td>No</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Yes</code></td><td>Yes</td><td nowrap>true</td></tr>
     * </table>
     */
    PotentialLiability__c?: string;
    PrimaryRecord?: PendingServiceRoutingInteractionInfo;
    Priority?: string;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    /**
     * <h3><b>Product</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">GC1040</code></td><td>GC1040</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">GC1060</code></td><td>GC1060</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">GC3020</code></td><td>GC3020</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">GC3040</code></td><td>GC3040</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">GC3060</code></td><td>GC3060</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">GC5020</code></td><td>GC5020</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">GC5040</code></td><td>GC5040</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">GC5060</code></td><td>GC5060</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">GC1020</code></td><td>GC1020</td><td nowrap>true</td></tr>
     * </table>
     */
    Product__c?: string;
    Reason?: string;
    Record?: CollaborationGroupRecordChangeEvent;
    RecordActionHistories?: RecordActionHistory[];
    RecordActions?: RecordAction[];
    RecordAssociatedGroups?: CollaborationGroupRecord[];
    RelatedRecord?: ContentDistribution;
    RelatedTo?: EmailMessageChangeEvent;
    Relation?: EventRelationChangeEvent;
    Shares?: CaseShare[];
    /**
     * <h3><b>SLA Violation</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">No</code></td><td>No</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Yes</code></td><td>Yes</td><td nowrap>true</td></tr>
     * </table>
     */
    SLAViolation__c?: string;
    Source?: SObject;
    SourceId?: string;
    Status?: string;
    Subject?: string;
    SuppliedCompany?: string;
    SuppliedEmail?: string;
    SuppliedName?: string;
    SuppliedPhone?: string;
    SurveySubjectEntities?: SurveySubject[];
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TaskRelations?: TaskRelation[];
    Tasks?: Task[];
    TeamMembers?: CaseTeamMember[];
    TeamTemplateRecords?: CaseTeamTemplateRecord[];
    TopicAssignments?: TopicAssignment[];
    Type?: string;
    What?: EventChangeEvent;
    WorkItem?: AgentWork;
}