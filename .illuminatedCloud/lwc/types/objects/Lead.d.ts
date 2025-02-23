// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Lead extends SObject 
{
    AcceptedEventRelations?: AcceptedEventRelation[];
    ActivityHistories?: ActivityHistory[];
    Address?: Address;
    AnnualRevenue?: number;
    AttachedContentDocuments?: AttachedContentDocument[];
    Attachments?: Attachment[];
    AuthorizationFormConsents?: AuthorizationFormConsent[];
    BouncedObject?: EmailBounceEvent;
    CampaignMembers?: CampaignMember[];
    City?: string;
    CleanStatus?: string;
    CombinedAttachments?: CombinedAttachment[];
    Company?: string;
    CompanyDunsNumber?: string;
    ConsentGiver?: AuthorizationFormConsentChangeEvent;
    ContactRequests?: ContactRequest[];
    ContactSurveyInvitations?: SurveyInvitation[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    ConvertedAccount?: Account;
    ConvertedAccountId?: string;
    ConvertedContact?: Contact;
    ConvertedContactId?: string;
    ConvertedDate?: Date;
    ConvertedOpportunity?: Opportunity;
    ConvertedOpportunityId?: string;
    Country?: string;
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
    DandbCompany?: DandBCompany;
    DandbCompanyId?: string;
    DeclinedEventRelations?: DeclinedEventRelation[];
    Description?: string;
    DoNotCall?: boolean;
    DuplicateRecordItems?: DuplicateRecordItem[];
    Email?: string;
    EmailBouncedDate?: string;
    EmailBouncedReason?: string;
    EmailMessageRelations?: EmailMessageRelation[];
    EmailStatuses?: EmailStatus[];
    EventRelations?: EventRelation[];
    Events?: Event[];
    EventWhoRelations?: EventWhoRelation[];
    Fax?: string;
    Feeds?: LeadFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstName?: string;
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    From?: EmailMessage;
    GeocodeAccuracy?: string;
    HasOptedOutOfEmail?: boolean;
    HasOptedOutOfFax?: boolean;
    Histories?: LeadHistory[];
    Individual?: Individual;
    IndividualId?: string;
    Industry?: string;
    IsConverted?: boolean;
    IsDeleted?: boolean;
    IsUnreadByOwner?: boolean;
    Jigsaw?: string;
    JigsawContact?: SObject;
    JigsawContactId?: string;
    LastActivityDate?: Date;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastName?: string;
    LastReferencedDate?: string;
    LastTransferDate?: Date;
    LastViewedDate?: string;
    Latitude?: number;
    Lead?: CampaignMemberChangeEvent;
    LeadCleanInfos?: LeadCleanInfo[];
    LeadOrContact?: CampaignMember;
    LeadSource?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    ListEmailIndividualRecipients?: ListEmailIndividualRecipient[];
    ListEmails?: ListEmail[];
    LiveChatTranscripts?: LiveChatTranscript[];
    Longitude?: number;
    MasterRecord?: Lead;
    MasterRecordId?: string;
    MobilePhone?: string;
    Name?: string;
    Notes?: Note[];
    NotesAndAttachments?: NoteAndAttachment[];
    NumberOfEmployees?: number;
    /**
     * <h3><b>Number of Locations</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(3,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    NumberofLocations__c?: number;
    ObjectTerritory2Associations?: ObjectTerritory2Association[];
    ObjectUserTerritory2Views?: ObjectUserTerritory2View[];
    OpenActivities?: OpenActivity[];
    OutgoingEmailRelations?: OutgoingEmailRelation[];
    Owner?: SObject;
    OwnerId?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    Participant?: SurveyInvitationChangeEvent;
    PartnerAccount?: Account;
    PartnerAccountId?: string;
    PersonRecord?: UserEmailPreferredPerson[];
    Phone?: string;
    PhotoUrl?: string;
    PostalCode?: string;
    /**
     * <h3><b>Primary</b></h3>
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
    Primary__c?: string;
    PrimaryRecord?: PendingServiceRoutingInteractionInfo;
    PrimaryWho?: ActivityHistory;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    /**
     * <h3><b>Product Interest</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">GC1000 series</code></td><td>GC1000 series</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">GC5000 series</code></td><td>GC5000 series</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">GC3000 series</code></td><td>GC3000 series</td><td nowrap>true</td></tr>
     * </table>
     */
    ProductInterest__c?: string;
    Rating?: string;
    Record?: CollaborationGroupRecordChangeEvent;
    RecordActionHistories?: RecordActionHistory[];
    RecordActions?: RecordAction[];
    RecordAssociatedGroups?: CollaborationGroupRecord[];
    RelatedRecord?: ContentDistribution;
    RelatedTo?: ListEmailChangeEvent;
    Relation?: EventRelationChangeEvent;
    Salutation?: string;
    Shares?: LeadShare[];
    /**
     * <h3><b>SIC Code</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(15)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SICCode__c?: string;
    State?: string;
    Status?: string;
    Street?: string;
    Subject?: SurveySubjectChangeEvent;
    Submitter?: SurveyResponse;
    SurveyInvitations?: SurveyInvitation[];
    SurveySubjectEntities?: SurveySubject[];
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TaskRelations?: TaskRelation[];
    Tasks?: Task[];
    TaskWhoRelations?: TaskWhoRelation[];
    Title?: string;
    TopicAssignments?: TopicAssignment[];
    UndecidedEventRelations?: UndecidedEventRelation[];
    Website?: string;
    Who?: EventChangeEvent;
    WorkItem?: AgentWork;
}