// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ConversationEntry extends SObject 
{
    Actor?: SObject;
    ActorId?: string;
    ActorName?: string;
    ActorType?: string;
    AttachedContentDocuments?: AttachedContentDocument[];
    ClientDuration?: number;
    ClientTimestamp?: string;
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    Conversation?: LiveChatTranscript;
    ConversationId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    EntryEndTime?: string;
    EntryTime?: string;
    EntryTimeMilliSecs?: number;
    EntryType?: string;
    FirstPublishLocation?: ContentVersion;
    HasAttachments?: boolean;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    Message?: string;
    MessageDeliverTime?: string;
    MessageIdentifier?: string;
    MessageReadTime?: string;
    MessageSendTime?: string;
    MessageStatus?: string;
    MessageStatusCode?: string;
    RelatedRecord?: FlowRecordRelation;
    Seq?: number;
    ServerReceivedTimestamp?: string;
    SystemModstamp?: string;
}