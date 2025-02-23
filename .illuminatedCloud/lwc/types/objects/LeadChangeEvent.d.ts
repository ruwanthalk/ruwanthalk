// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface LeadChangeEvent extends SObject 
{
    Address?: Address;
    AnnualRevenue?: number;
    ChangeEventHeader?: ChangeEventHeader;
    City?: string;
    CleanStatus?: string;
    Company?: string;
    CompanyDunsNumber?: string;
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
    Description?: string;
    DoNotCall?: boolean;
    Email?: string;
    EmailBouncedDate?: string;
    EmailBouncedReason?: string;
    Fax?: string;
    FirstName?: string;
    GeocodeAccuracy?: string;
    HasOptedOutOfEmail?: boolean;
    HasOptedOutOfFax?: boolean;
    Individual?: Individual;
    IndividualId?: string;
    Industry?: string;
    IsConverted?: boolean;
    IsUnreadByOwner?: boolean;
    Jigsaw?: string;
    JigsawContactId?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastName?: string;
    LastTransferDate?: Date;
    Latitude?: number;
    LeadSource?: string;
    Longitude?: number;
    MobilePhone?: string;
    Name?: string;
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
    Owner?: User;
    OwnerId?: string;
    PartnerAccount?: Account;
    PartnerAccountId?: string;
    Phone?: string;
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
    ReplayId?: string;
    Salutation?: string;
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
    Title?: string;
    Website?: string;
}