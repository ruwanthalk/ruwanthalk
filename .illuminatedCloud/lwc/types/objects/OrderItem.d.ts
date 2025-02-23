// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OrderItem extends SObject 
{
    AttachedContentDocuments?: AttachedContentDocument[];
    AvailableQuantity?: number;
    ChildOrderItems?: OrderItem[];
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    EndDate?: Date;
    Feeds?: OrderItemFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    Histories?: OrderItemHistory[];
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    ListPrice?: number;
    Order?: Order;
    OrderId?: string;
    OrderItemNumber?: string;
    OriginalOrderItem?: OrderItem;
    OriginalOrderItemId?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    PricebookEntry?: PricebookEntry;
    PricebookEntryId?: string;
    Product2?: Product2;
    Product2Id?: string;
    Quantity?: number;
    QuoteLineItem?: QuoteLineItem;
    QuoteLineItemId?: string;
    RelatedRecord?: FlowRecordRelation;
    ServiceDate?: Date;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TotalPrice?: number;
    UnitPrice?: number;
}