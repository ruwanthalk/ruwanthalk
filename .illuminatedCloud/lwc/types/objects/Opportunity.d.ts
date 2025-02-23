// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Opportunity extends SObject 
{
    Account?: Account;
    AccountId?: string;
    AccountPartners?: AccountPartner[];
    ActivityHistories?: ActivityHistory[];
    Amount?: number;
    AttachedContentDocuments?: AttachedContentDocument[];
    Attachments?: Attachment[];
    Campaign?: Campaign;
    CampaignId?: string;
    CCMI__Milestone_Projects__r?: CCMI__Milestone_Project__c[];
    CCMI__Time_Entries__r?: CCMI__Work__c[];
    CloseDate?: Date;
    CombinedAttachments?: CombinedAttachment[];
    Contact?: Contact;
    ContactId?: string;
    ContactRequests?: ContactRequest[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    Contract?: Contract;
    ContractId?: string;
    ConvertedOpportunity?: Lead;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    /**
     * <h3><b>Current Generator(s)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CurrentGenerators__c?: string;
    /**
     * <h3><b>Delivery/Installation Status</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">In progress</code></td><td>In progress</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Yet to begin</code></td><td>Yet to begin</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Completed</code></td><td>Completed</td><td nowrap>true</td></tr>
     * </table>
     */
    DeliveryInstallationStatus__c?: string;
    Description?: string;
    Emails?: EmailMessage[];
    EventRelations?: EventRelation[];
    Events?: Event[];
    ExpectedRevenue?: number;
    Feeds?: OpportunityFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    Fiscal?: string;
    FiscalQuarter?: number;
    FiscalYear?: number;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    ForecastCategory?: string;
    ForecastCategoryName?: string;
    HasOpenActivity?: boolean;
    HasOpportunityLineItem?: boolean;
    HasOverdueTask?: boolean;
    Histories?: OpportunityFieldHistory[];
    IsClosed?: boolean;
    IsDeleted?: boolean;
    IsExcludedFromTerritory2Filter?: boolean;
    IsPrivate?: boolean;
    IsWon?: boolean;
    LastActivityDate?: Date;
    LastAmountChangedHistory?: OpportunityHistory;
    LastAmountChangedHistoryId?: string;
    LastCloseDateChangedHistory?: OpportunityHistory;
    LastCloseDateChangedHistoryId?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastStageChangeDate?: string;
    LastViewedDate?: string;
    LeadSource?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    ListEmails?: ListEmail[];
    /**
     * <h3><b>Main Competitor(s)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    MainCompetitors__c?: string;
    Name?: string;
    NextStep?: string;
    Notes?: Note[];
    NotesAndAttachments?: NoteAndAttachment[];
    OpenActivities?: OpenActivity[];
    Opportunity?: OpportunityContactRoleChangeEvent;
    OpportunityCompetitors?: OpportunityCompetitor[];
    OpportunityContactRoles?: OpportunityContactRole[];
    OpportunityHistories?: OpportunityHistory[];
    OpportunityLineItems?: OpportunityLineItem[];
    OpportunityPartnersFrom?: OpportunityPartner[];
    OpportunityRelatedDeleteLogs?: OpportunityRelatedDeleteLog[];
    OpportunityTeamMembers?: OpportunityTeamMember[];
    /**
     * <h3><b>Order Number</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(8)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    OrderNumber__c?: string;
    Orders?: Order[];
    Owner?: User;
    OwnerId?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    PartnerAccount?: Account;
    PartnerAccountId?: string;
    Partners?: Partner[];
    Pricebook2?: Pricebook2;
    Pricebook2Id?: string;
    PrimaryRecord?: PendingServiceRoutingInteractionInfo;
    Probability?: number;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    PushCount?: number;
    Quotes?: Quote[];
    Record?: CollaborationGroupRecordChangeEvent;
    RecordActionHistories?: RecordActionHistory[];
    RecordActions?: RecordAction[];
    RecordAssociatedGroups?: CollaborationGroupRecord[];
    RecordType?: RecordType;
    RecordTypeId?: string;
    RelatedRecord?: ContentDistribution;
    RelatedTo?: EmailMessageChangeEvent;
    Relation?: EventRelationChangeEvent;
    Shares?: OpportunityShare[];
    StageName?: string;
    Subject?: SurveySubjectChangeEvent;
    SurveySubjectEntities?: SurveySubject[];
    SyncedQuote?: Quote;
    SyncedQuoteId?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TaskRelations?: TaskRelation[];
    Tasks?: Task[];
    Territory2?: Territory2;
    Territory2Id?: string;
    TopicAssignments?: TopicAssignment[];
    TotalOpportunityQuantity?: number;
    /**
     * <h3><b>Tracking Number</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(12)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    TrackingNumber__c?: string;
    Type?: string;
    What?: EventChangeEvent;
    WorkItem?: AgentWork;
}