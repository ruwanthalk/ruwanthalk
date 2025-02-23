// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ListEmail extends SObject 
{
    ActivityHistories?: ActivityHistory[];
    AttachedContentDocuments?: AttachedContentDocument[];
    Campaign?: Campaign;
    CampaignId?: string;
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Emails?: EmailMessage[];
    EventRelations?: EventRelation[];
    Events?: Event[];
    FirstPublishLocation?: ContentVersion;
    FromAddress?: string;
    FromName?: string;
    HasAttachment?: boolean;
    HtmlBody?: string;
    IsDeleted?: boolean;
    IsTracked?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    ListEmail?: ListEmailIndividualRecipient;
    Name?: string;
    OpenActivities?: OpenActivity[];
    Owner?: SObject;
    OwnerId?: string;
    RelatedRecord?: ContentDistribution;
    RelatedTo?: SObject;
    RelatedToId?: string;
    Relation?: EventRelationChangeEvent;
    ScheduledDate?: string;
    Shares?: ListEmailShare[];
    Status?: string;
    Subject?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TaskRelations?: TaskRelation[];
    Tasks?: Task[];
    TextBody?: string;
    TotalSent?: number;
    What?: EventChangeEvent;
}