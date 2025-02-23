// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ScorecardAssociation extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    Name?: string;
    RelatedRecord?: FlowRecordRelation;
    Scorecard?: Scorecard;
    ScorecardId?: string;
    SystemModstamp?: string;
    TargetEntity?: SObject;
    TargetEntityId?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}