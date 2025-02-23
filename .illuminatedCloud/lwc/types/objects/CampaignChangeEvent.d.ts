// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CampaignChangeEvent extends SObject 
{
    ActualCost?: number;
    AmountAllOpportunities?: number;
    AmountWonOpportunities?: number;
    BudgetedCost?: number;
    CampaignImage?: ContentDocument;
    CampaignImageId?: string;
    CampaignMemberRecordType?: RecordType;
    CampaignMemberRecordTypeId?: string;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    EndDate?: Date;
    ExpectedResponse?: number;
    ExpectedRevenue?: number;
    HierarchyActualCost?: number;
    HierarchyAmountAllOpportunities?: number;
    HierarchyAmountWonOpportunities?: number;
    HierarchyBudgetedCost?: number;
    HierarchyExpectedRevenue?: number;
    HierarchyNumberOfContacts?: number;
    HierarchyNumberOfConvertedLeads?: number;
    HierarchyNumberOfLeads?: number;
    HierarchyNumberOfOpportunities?: number;
    HierarchyNumberOfResponses?: number;
    HierarchyNumberOfWonOpportunities?: number;
    HierarchyNumberSent?: number;
    IsActive?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    NumberOfContacts?: number;
    NumberOfConvertedLeads?: number;
    NumberOfLeads?: number;
    NumberOfOpportunities?: number;
    NumberOfResponses?: number;
    NumberOfWonOpportunities?: number;
    NumberSent?: number;
    Owner?: User;
    OwnerId?: string;
    Parent?: Campaign;
    ParentId?: string;
    ReplayId?: string;
    StartDate?: Date;
    Status?: string;
    Type?: string;
}