// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Scorecard extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    RecordActionHistories?: RecordActionHistory[];
    RecordActions?: RecordAction[];
    RelatedRecord?: FlowRecordRelation;
    ScorecardAssociations?: ScorecardAssociation[];
    ScorecardMetrics?: ScorecardMetric[];
    Shares?: ScorecardShare[];
    SystemModstamp?: string;
    TargetEntity?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}