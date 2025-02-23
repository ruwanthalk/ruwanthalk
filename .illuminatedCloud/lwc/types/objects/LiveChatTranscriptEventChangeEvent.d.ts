// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface LiveChatTranscriptEventChangeEvent extends SObject 
{
    Agent?: User;
    AgentId?: string;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Detail?: string;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LiveChatTranscript?: LiveChatTranscript;
    LiveChatTranscriptId?: string;
    Name?: string;
    ReplayId?: string;
    Time?: string;
    Type?: string;
}