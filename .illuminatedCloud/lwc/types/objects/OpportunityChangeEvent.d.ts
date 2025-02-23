// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OpportunityChangeEvent extends SObject 
{
    Account?: Account;
    AccountId?: string;
    Amount?: number;
    Campaign?: Campaign;
    CampaignId?: string;
    ChangeEventHeader?: ChangeEventHeader;
    CloseDate?: Date;
    Contact?: Contact;
    ContactId?: string;
    Contract?: Contract;
    ContractId?: string;
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
    ExpectedRevenue?: number;
    ForecastCategory?: string;
    ForecastCategoryName?: string;
    HasOpportunityLineItem?: boolean;
    IsClosed?: boolean;
    IsExcludedFromTerritory2Filter?: boolean;
    IsPrivate?: boolean;
    IsWon?: boolean;
    LastAmountChangedHistory?: OpportunityHistory;
    LastAmountChangedHistoryId?: string;
    LastCloseDateChangedHistory?: OpportunityHistory;
    LastCloseDateChangedHistoryId?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastStageChangeDate?: string;
    LeadSource?: string;
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
    Owner?: User;
    OwnerId?: string;
    PartnerAccount?: Account;
    PartnerAccountId?: string;
    Pricebook2?: Pricebook2;
    Pricebook2Id?: string;
    Probability?: number;
    RecordType?: RecordType;
    RecordTypeId?: string;
    ReplayId?: string;
    StageName?: string;
    SyncedQuote?: Quote;
    SyncedQuoteId?: string;
    Territory2?: Territory2;
    Territory2Id?: string;
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
}