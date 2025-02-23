// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface QuoteDocument extends SObject 
{
    ContentVersionDocument?: ContentVersion;
    ContentVersionDocumentId?: string;
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Discount?: number;
    Document?: string;
    GrandTotal?: number;
    IsDeleted?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Name?: string;
    Quote?: Quote;
    QuoteId?: string;
    RelatedRecord?: FlowRecordRelation;
    SystemModstamp?: string;
}