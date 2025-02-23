// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Account extends SObject 
{
    Account?: AcceptedEventRelation;
    AccountBrands?: AccountBrand[];
    AccountCleanInfos?: AccountCleanInfo[];
    AccountContactRoles?: AccountContactRole[];
    AccountNumber?: string;
    AccountPartnersFrom?: AccountPartner[];
    AccountPartnersTo?: AccountPartner[];
    AccountSource?: string;
    AccountTeamMembers?: AccountTeamMember[];
    AccountUserTerritory2Views?: AccountUserTerritory2View[];
    /**
     * <h3><b>Active</b></h3>
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
    Active__c?: string;
    ActivityHistories?: ActivityHistory[];
    AnnualRevenue?: number;
    AssetProvidedBy?: AssetChangeEvent;
    Assets?: Asset[];
    AssetServicedBy?: AssetChangeEvent;
    AttachedContentDocuments?: AttachedContentDocument[];
    Attachments?: Attachment[];
    AuthorizationFormConsents?: AuthorizationFormConsent[];
    BillingAddress?: Address;
    BillingCity?: string;
    BillingCountry?: string;
    BillingGeocodeAccuracy?: string;
    BillingLatitude?: number;
    BillingLongitude?: number;
    BillingPostalCode?: string;
    BillingState?: string;
    BillingStreet?: string;
    Cases?: Case[];
    CCMI__Milestone_Projects__r?: CCMI__Milestone_Project__c[];
    CCMI__Time_Entries__r?: CCMI__Work__c[];
    ChannelProgramLevelName?: string;
    ChannelProgramMembers?: ChannelProgramMember[];
    ChannelProgramName?: string;
    ChildAccounts?: Account[];
    CleanStatus?: string;
    CombinedAttachments?: CombinedAttachment[];
    ConsentGiver?: AuthorizationFormConsentChangeEvent;
    ContactRequests?: ContactRequest[];
    Contacts?: Contact[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    Contracts?: Contract[];
    ConvertedAccount?: Lead;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    /**
     * <h3><b>Customer Priority</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">High</code></td><td>High</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Low</code></td><td>Low</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Medium</code></td><td>Medium</td><td nowrap>true</td></tr>
     * </table>
     */
    CustomerPriority__c?: string;
    DandbCompany?: DandBCompany;
    DandbCompanyId?: string;
    DelegatedAccounts?: DelegatedAccount[];
    Description?: string;
    DunsNumber?: string;
    DuplicateRecordItems?: DuplicateRecordItem[];
    Emails?: EmailMessage[];
    EventRelations?: EventRelation[];
    Events?: Event[];
    Fax?: string;
    Feeds?: AccountFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    Histories?: AccountHistory[];
    Industry?: string;
    IsCustomerPortal?: boolean;
    IsDeleted?: boolean;
    IsExcludedFromRealign?: boolean;
    IsPartner?: boolean;
    Jigsaw?: string;
    JigsawCompany?: SObject;
    JigsawCompanyId?: string;
    LastActivityDate?: Date;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LeadOrContact?: CampaignMember;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    LiveChatTranscripts?: LiveChatTranscript[];
    ManagedAccount?: DelegatedAccount[];
    MasterRecord?: Account;
    MasterRecordId?: string;
    NaicsCode?: string;
    NaicsDesc?: string;
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
    Opportunities?: Opportunity[];
    OpportunityPartnersTo?: OpportunityPartner[];
    Orders?: Order[];
    Owner?: User;
    OwnerId?: string;
    Ownership?: string;
    Parent?: Account;
    ParentEntities?: NetworkActivityAudit[];
    ParentId?: string;
    ParentRecord?: NetworkFeedResponseMetric;
    PartnerAccount?: Lead;
    PartnerFundAllocations?: PartnerFundAllocation[];
    PartnerFundClaims?: PartnerFundClaim[];
    PartnerFundRequests?: PartnerFundRequest[];
    PartnerMarketingBudgets?: PartnerMarketingBudget[];
    PartnersFrom?: Partner[];
    PartnersTo?: Partner[];
    Phone?: string;
    PhotoUrl?: string;
    PortalAccount?: UserRole;
    PrimaryAccount?: ActivityHistory;
    PrimaryRecord?: PendingServiceRoutingInteractionInfo;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    ProvidedAssets?: Asset[];
    Rating?: string;
    Record?: CollaborationGroupRecordChangeEvent;
    RecordActionHistories?: RecordActionHistory[];
    RecordActions?: RecordAction[];
    RecordAssociatedGroups?: CollaborationGroupRecord[];
    RelatedAuthorizationFormConsents?: AuthorizationFormConsent[];
    RelatedRecord?: AuthorizationFormConsentChangeEvent;
    RelatedTo?: EmailMessageChangeEvent;
    Relation?: EventRelationChangeEvent;
    /**
     * <h3><b>Rich Text</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Html</td></tr>
     * </table>
     */
    Rich_Text__c?: string;
    ScorecardAssociations?: ScorecardAssociation[];
    ServicedAssets?: Asset[];
    Shares?: AccountShare[];
    ShippingAddress?: Address;
    ShippingCity?: string;
    ShippingCountry?: string;
    ShippingGeocodeAccuracy?: string;
    ShippingLatitude?: number;
    ShippingLongitude?: number;
    ShippingPostalCode?: string;
    ShippingState?: string;
    ShippingStreet?: string;
    Sic?: string;
    SicDesc?: string;
    Site?: string;
    /**
     * <h3><b>SLA</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Gold</code></td><td>Gold</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Silver</code></td><td>Silver</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Platinum</code></td><td>Platinum</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Bronze</code></td><td>Bronze</td><td nowrap>true</td></tr>
     * </table>
     */
    SLA__c?: string;
    /**
     * <h3><b>SLA Expiration Date</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SLAExpirationDate__c?: Date;
    /**
     * <h3><b>SLA Serial Number</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(10)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    SLASerialNumber__c?: string;
    Subject?: SurveySubjectChangeEvent;
    SurveySubjectEntities?: SurveySubject[];
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TaskRelations?: TaskRelation[];
    Tasks?: Task[];
    Territory2ObjectExclusions?: Territory2ObjectExclusion[];
    Test1s__r?: Test1__c[];
    TickerSymbol?: string;
    TopicAssignments?: TopicAssignment[];
    Tradestyle?: string;
    Type?: string;
    /**
     * <h3><b>Upsell Opportunity</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Maybe</code></td><td>Maybe</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">No</code></td><td>No</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Yes</code></td><td>Yes</td><td nowrap>true</td></tr>
     * </table>
     */
    UpsellOpportunity__c?: string;
    Users?: User[];
    Website?: string;
    What?: EventChangeEvent;
    WorkItem?: AgentWork;
    YearStarted?: string;
}