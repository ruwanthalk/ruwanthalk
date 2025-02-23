// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface CommSubscriptionFeed extends SObject 
{
    BestComment?: FeedComment;
    BestCommentId?: string;
    Body?: string;
    CommentCount?: number;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    FeedAttachments?: FeedAttachment[];
    FeedComments?: FeedComment[];
    FeedEntity?: FeedLike;
    FeedItem?: FeedPollChoice;
    FeedLikes?: FeedLike[];
    FeedSignals?: FeedSignal[];
    FeedTrackedChanges?: FeedTrackedChange[];
    InsertedBy?: User;
    InsertedById?: string;
    IsDeleted?: boolean;
    IsRichText?: boolean;
    LastModifiedDate?: string;
    LikeCount?: number;
    LinkUrl?: string;
    NetworkScope?: string;
    Parent?: CommSubscription;
    ParentId?: string;
    RelatedRecord?: ContentVersion;
    RelatedRecordId?: string;
    SystemModstamp?: string;
    Title?: string;
    Type?: string;
    Visibility?: string;
}