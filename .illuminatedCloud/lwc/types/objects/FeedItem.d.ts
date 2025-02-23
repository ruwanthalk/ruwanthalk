// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface FeedItem extends SObject 
{
    AuditableEntities?: NetworkActivityAudit[];
    BestComment?: FeedComment;
    BestCommentId?: string;
    Body?: string;
    CommentCount?: number;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Entity?: NetworkModeration;
    FeedAttachments?: FeedAttachment[];
    FeedComments?: FeedComment[];
    FeedEntity?: FeedLike;
    FeedItem?: Announcement;
    FeedLikes?: FeedLike[];
    FeedRevisions?: FeedRevision[];
    FeedSignals?: FeedSignal[];
    FeedTrackedChanges?: FeedTrackedChange[];
    HasContent?: boolean;
    HasFeedEntity?: boolean;
    HasLink?: boolean;
    HasVerifiedComment?: boolean;
    InsertedBy?: User;
    InsertedById?: string;
    IsClosed?: boolean;
    IsDeleted?: boolean;
    IsRichText?: boolean;
    LastEditBy?: User;
    LastEditById?: string;
    LastEditDate?: string;
    LastModifiedDate?: string;
    LikeCount?: number;
    LinkUrl?: string;
    NetworkScope?: string;
    NetworkUserHistoryRecentToFeedItem?: NetworkUserHistoryRecent[];
    Parent?: SObject;
    ParentId?: string;
    Record?: FeedAttachment;
    RelatedRecord?: ContentVersion;
    RelatedRecordId?: string;
    Revision?: number;
    Status?: string;
    SystemModstamp?: string;
    Title?: string;
    TopicAssignments?: TopicAssignment[];
    Type?: string;
    Visibility?: string;
}