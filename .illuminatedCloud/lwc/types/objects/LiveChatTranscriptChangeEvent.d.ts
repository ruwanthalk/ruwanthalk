// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface LiveChatTranscriptChangeEvent extends SObject 
{
    Account?: Account;
    AccountId?: string;
    AverageResponseTimeOperator?: number;
    AverageResponseTimeVisitor?: number;
    Body?: string;
    Browser?: string;
    BrowserLanguage?: string;
    Case?: Case;
    CaseId?: string;
    ChangeEventHeader?: ChangeEventHeader;
    ChatKey?: string;
    Contact?: Contact;
    ContactId?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    EndedBy?: string;
    EndTime?: string;
    IpAddress?: string;
    IsChatbotSession?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Lead?: Lead;
    LeadId?: string;
    LiveChatButton?: LiveChatButton;
    LiveChatButtonId?: string;
    LiveChatDeployment?: LiveChatDeployment;
    LiveChatDeploymentId?: string;
    LiveChatVisitor?: LiveChatVisitor;
    LiveChatVisitorId?: string;
    Location?: string;
    MaxResponseTimeOperator?: number;
    MaxResponseTimeVisitor?: number;
    Name?: string;
    OperatorMessageCount?: number;
    Owner?: User;
    OwnerId?: string;
    Platform?: string;
    ReferrerUri?: string;
    ReplayId?: string;
    RequestTime?: string;
    ScreenResolution?: string;
    Skill?: Skill;
    SkillId?: string;
    StartTime?: string;
    Status?: string;
    SupervisorTranscriptBody?: string;
    UserAgent?: string;
    VisitorMessageCount?: number;
    VisitorNetwork?: string;
}