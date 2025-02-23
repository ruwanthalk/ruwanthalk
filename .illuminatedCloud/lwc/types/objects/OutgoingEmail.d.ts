// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface OutgoingEmail extends SObject 
{
    BccAddress?: string;
    CcAddress?: string;
    ContentDocumentLinks?: ContentDocumentLink[];
    EmailTemplate?: EmailTemplate;
    EmailTemplateId?: string;
    ExternalId?: string;
    FirstPublishLocation?: ContentVersion;
    HtmlBody?: string;
    InReplyTo?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    MessageId?: string;
    OutgoingEmailRelations?: OutgoingEmailRelation[];
    References?: string;
    RelatedTo?: SObject;
    RelatedToId?: string;
    Subject?: string;
    TextBody?: string;
    ToAddress?: string;
    ValidatedFromAddress?: string;
    Who?: SObject;
    WhoId?: string;
}