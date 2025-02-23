// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OpportunityTeamMember extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Histories?: OpportunityTeamMemberHistory[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Opportunity?: Opportunity;
    OpportunityAccessLevel?: string;
    OpportunityId?: string;
    PhotoUrl?: string;
    RelatedRecord?: FlowRecordRelation;
    SystemModstamp?: string;
    TeamMemberRole?: string;
    Title?: string;
    User?: User;
    UserId?: string;
}