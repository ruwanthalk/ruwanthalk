// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface LiveChatVisitor extends SObject 
{
    ContextRecord?: FlowExecutionErrorEvent;
    ConversationEntries?: ConversationEntry[];
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LiveChatTranscripts?: LiveChatTranscript[];
    LiveChatVisitor?: LiveChatTranscriptChangeEvent;
    Name?: string;
    RelatedRecord?: FlowRecordRelation;
    SessionKey?: string;
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
}