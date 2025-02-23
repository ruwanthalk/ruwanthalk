// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EmailTemplate extends SObject 
{
    ApiVersion?: number;
    AttachedContentDocuments?: AttachedContentDocument[];
    Attachments?: Attachment[];
    Body?: string;
    BrandTemplate?: BrandTemplate;
    BrandTemplateId?: string;
    CaseCommentEmailTemplate?: Network;
    ChangePasswordEmailTemplate?: Network;
    ChgEmailVerNewEmailTemplate?: Network;
    ChgEmailVerOldEmailTemplate?: Network;
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    DeveloperName?: string;
    DeviceActEmailTemplate?: Network;
    EmailTemplate?: EmailMessage;
    Encoding?: string;
    FirstPublishLocation?: ContentVersion;
    Folder?: SObject;
    FolderId?: string;
    FolderName?: string;
    ForgotPasswordEmailTemplate?: Network;
    HeadlessForgotPasswordTemplate?: Network;
    HeadlessRegistrationTemplate?: Network;
    HtmlValue?: string;
    IsActive?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastUsedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    LockoutEmailTemplate?: Network;
    Markup?: string;
    Name?: string;
    NamespacePrefix?: string;
    Owner?: User;
    OwnerId?: string;
    Parent?: DocumentAttachmentMap;
    PwdlessRegEmailTemplate?: Network;
    RelatedEntityType?: string;
    SelfRegMicroBatchSubErrorEmailTemplate?: Network;
    Subject?: string;
    SystemModstamp?: string;
    TemplateStyle?: string;
    TemplateType?: string;
    TimesUsed?: number;
    UiType?: string;
    VerificationEmailTemplate?: Network;
    WelcomeEmailTemplate?: Network;
}