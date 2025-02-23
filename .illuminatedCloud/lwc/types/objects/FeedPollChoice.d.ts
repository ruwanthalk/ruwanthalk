// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FeedPollChoice extends SObject 
{
    ChoiceBody?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    FeedItem?: SObject;
    FeedItemId?: string;
    FeedPollVotes?: FeedPollVote[];
    IsDeleted?: boolean;
    Position?: number;
    RelatedRecord?: FlowRecordRelation;
}