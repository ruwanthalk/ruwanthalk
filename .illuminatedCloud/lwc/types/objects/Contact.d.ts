// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Contact extends SObject 
{
    AcceptedEventRelations?: AcceptedEventRelation[];
    Account?: Account;
    AccountContactRoles?: AccountContactRole[];
    AccountId?: string;
    ActivityHistories?: ActivityHistory[];
    Assets?: Asset[];
    AssistantName?: string;
    AssistantPhone?: string;
    AttachedContentDocuments?: AttachedContentDocument[];
    Attachments?: Attachment[];
    AuthorizationFormConsents?: AuthorizationFormConsent[];
    BillToContact?: Order;
    Birthdate?: Date;
    BouncedObject?: EmailBounceEvent;
    CampaignMembers?: CampaignMember[];
    CaseContactRoles?: CaseContactRole[];
    Cases?: Case[];
    CCMI__Milestone_Assignments__r?: CCMI__Milestone_Assignment2__c[];
    CleanStatus?: string;
    CombinedAttachments?: CombinedAttachment[];
    ConsentGiver?: AuthorizationFormConsentChangeEvent;
    Contact?: AccountContactRoleChangeEvent;
    ContactCleanInfos?: ContactCleanInfo[];
    ContactRequests?: ContactRequest[];
    ContactSource?: string;
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    ContractContactRoles?: ContractContactRole[];
    ContractsSigned?: Contract[];
    ConvertedContact?: Lead;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CustomerAuthorizedBy?: Order;
    CustomerSigned?: ContractChangeEvent;
    DeclinedEventRelations?: DeclinedEventRelation[];
    Department?: string;
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
    Feeds?: ContactFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstName?: string;
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    From?: EmailMessage;
    HasOptedOutOfEmail?: boolean;
    HasOptedOutOfFax?: boolean;
    Histories?: ContactHistory[];
    HomePhone?: string;
    Individual?: Individual;
    IndividualId?: string;
    IsDeleted?: boolean;
    IsEmailBounced?: boolean;
    Jigsaw?: string;
    JigsawContact?: SObject;
    JigsawContactId?: string;
    /**
     * <h3><b>Languages</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(100)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Languages__c?: string;
    LastActivityDate?: Date;
    LastCURequestDate?: string;
    LastCUUpdateDate?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastName?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LeadOrContact?: CampaignMember;
    LeadSource?: string;
    LeadSurveyInvitations?: SurveyInvitation[];
    /**
     * <h3><b>Level</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Secondary</code></td><td>Secondary</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Tertiary</code></td><td>Tertiary</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Primary</code></td><td>Primary</td><td nowrap>true</td></tr>
     * </table>
     */
    Level__c?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    ListEmailIndividualRecipients?: ListEmailIndividualRecipient[];
    ListEmails?: ListEmail[];
    LiveChatTranscripts?: LiveChatTranscript[];
    MailingAddress?: Address;
    MailingCity?: string;
    MailingCountry?: string;
    MailingGeocodeAccuracy?: string;
    MailingLatitude?: number;
    MailingLongitude?: number;
    MailingPostalCode?: string;
    MailingState?: string;
    MailingStreet?: string;
    MasterRecord?: Contact;
    MasterRecordId?: string;
    Member?: CaseTeamMember;
    MobilePhone?: string;
    Name?: string;
    Notes?: Note[];
    NotesAndAttachments?: NoteAndAttachment[];
    OpenActivities?: OpenActivity[];
    Opportunities?: Opportunity[];
    OpportunityContactRoles?: OpportunityContactRole[];
    OtherAddress?: Address;
    OtherCity?: string;
    OtherCountry?: string;
    OtherGeocodeAccuracy?: string;
    OtherLatitude?: number;
    OtherLongitude?: number;
    OtherPhone?: string;
    OtherPostalCode?: string;
    OtherState?: string;
    OtherStreet?: string;
    OutgoingEmailRelations?: OutgoingEmailRelation[];
    Owner?: User;
    OwnerId?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    Participant?: SurveyInvitationChangeEvent;
    PersonRecord?: UserEmailPreferredPerson[];
    Phone?: string;
    PhotoUrl?: string;
    PrimaryRecord?: PendingServiceRoutingInteractionInfo;
    PrimaryWho?: ActivityHistory;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    Quotes?: Quote[];
    Record?: CollaborationGroupRecordChangeEvent;
    RecordActionHistories?: RecordActionHistory[];
    RecordActions?: RecordAction[];
    RecordAssociatedGroups?: CollaborationGroupRecord[];
    RelatedRecord?: ContentDistribution;
    RelatedTo?: ListEmailChangeEvent;
    Relation?: EventRelationChangeEvent;
    ReportsTo?: Contact;
    ReportsToId?: string;
    Salutation?: string;
    SFDCId?: MatchingInformation;
    Shares?: ContactShare[];
    ShipToContact?: Order;
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
    Users?: User[];
    Who?: EventChangeEvent;
    WorkItem?: AgentWork;
}