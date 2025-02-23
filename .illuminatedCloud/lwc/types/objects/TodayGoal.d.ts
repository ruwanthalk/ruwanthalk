// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface TodayGoal extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Owner?: SObject;
    OwnerId?: string;
    RelatedRecord?: FlowRecordRelation;
    Shares?: TodayGoalShare[];
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    User?: User;
    UserId?: string;
    Value?: number;
}