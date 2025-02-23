// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CampaignMemberChangeEvent extends SObject 
{
    Campaign?: Campaign;
    CampaignId?: string;
    ChangeEventHeader?: ChangeEventHeader;
    Contact?: Contact;
    ContactId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    FirstRespondedDate?: Date;
    HasResponded?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Lead?: Lead;
    LeadId?: string;
    ReplayId?: string;
    Status?: string;
}