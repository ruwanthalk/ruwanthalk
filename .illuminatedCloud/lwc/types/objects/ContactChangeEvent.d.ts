// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ContactChangeEvent extends SObject 
{
    Account?: Account;
    AccountId?: string;
    AssistantName?: string;
    AssistantPhone?: string;
    Birthdate?: Date;
    ChangeEventHeader?: ChangeEventHeader;
    CleanStatus?: string;
    ContactSource?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Department?: string;
    Description?: string;
    DoNotCall?: boolean;
    Email?: string;
    EmailBouncedDate?: string;
    EmailBouncedReason?: string;
    Fax?: string;
    FirstName?: string;
    HasOptedOutOfEmail?: boolean;
    HasOptedOutOfFax?: boolean;
    HomePhone?: string;
    Individual?: Individual;
    IndividualId?: string;
    Jigsaw?: string;
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
    LastCURequestDate?: string;
    LastCUUpdateDate?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastName?: string;
    LeadSource?: string;
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
    MailingAddress?: Address;
    MailingCity?: string;
    MailingCountry?: string;
    MailingGeocodeAccuracy?: string;
    MailingLatitude?: number;
    MailingLongitude?: number;
    MailingPostalCode?: string;
    MailingState?: string;
    MailingStreet?: string;
    MobilePhone?: string;
    Name?: string;
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
    Owner?: User;
    OwnerId?: string;
    Phone?: string;
    ReplayId?: string;
    ReportsTo?: Contact;
    ReportsToId?: string;
    Salutation?: string;
    Title?: string;
}