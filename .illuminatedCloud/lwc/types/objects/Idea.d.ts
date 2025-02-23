// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Idea extends SObject 
{
    AttachmentBody?: string;
    AttachmentContentType?: string;
    AttachmentLength?: number;
    AttachmentName?: string;
    Body?: string;
    Categories?: string;
    Comments?: IdeaComment[];
    Community?: Community;
    CommunityId?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    CreatorFullPhotoUrl?: string;
    CreatorName?: string;
    CreatorSmallPhotoUrl?: string;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    IsDeleted?: boolean;
    IsHtml?: boolean;
    IsMerged?: boolean;
    LastComment?: IdeaComment;
    LastCommentDate?: string;
    LastCommentId?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    NumComments?: number;
    ParentIdea?: Idea;
    ParentIdeaId?: string;
    RecordType?: RecordType;
    RecordTypeId?: string;
    RelatedRecord?: FlowRecordRelation;
    Status?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    Title?: string;
    Votes?: Vote[];
    VoteScore?: number;
    VoteTotal?: number;
}