// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CampaignMember extends SObject 
{
    Campaign?: Campaign;
    CampaignId?: string;
    City?: string;
    CompanyOrAccount?: string;
    Contact?: Contact;
    ContactId?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    Country?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    DoNotCall?: boolean;
    Email?: string;
    Fax?: string;
    FirstName?: string;
    FirstRespondedDate?: Date;
    HasOptedOutOfEmail?: boolean;
    HasOptedOutOfFax?: boolean;
    HasResponded?: boolean;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastName?: string;
    Lead?: Lead;
    LeadId?: string;
    LeadOrContact?: SObject;
    LeadOrContactId?: string;
    LeadOrContactOwner?: SObject;
    LeadOrContactOwnerId?: string;
    LeadSource?: string;
    ListEmailIndividualRecipients?: ListEmailIndividualRecipient[];
    MobilePhone?: string;
    Name?: string;
    Phone?: string;
    PostalCode?: string;
    RecordActionHistories?: RecordActionHistory[];
    RecordActions?: RecordAction[];
    RelatedRecord?: FlowRecordRelation;
    Salutation?: string;
    State?: string;
    Status?: string;
    Street?: string;
    SystemModstamp?: string;
    Title?: string;
    Type?: string;
}