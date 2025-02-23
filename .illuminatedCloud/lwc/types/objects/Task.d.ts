// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Task extends SObject 
{
    Account?: Account;
    AccountId?: string;
    Activity?: EmailMessage;
    ActivityDate?: Date;
    ActivityFieldHistories?: ActivityFieldHistory[];
    AttachedContentDocuments?: AttachedContentDocument[];
    Attachments?: Attachment[];
    CallDisposition?: string;
    CallDurationInSeconds?: number;
    CallObject?: string;
    CallType?: string;
    CombinedAttachments?: CombinedAttachment[];
    CompletedDateTime?: string;
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    /**
     * <h3><b>Feedback</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Feedback__c?: string;
    Feeds?: TaskFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    IsArchived?: boolean;
    IsClosed?: boolean;
    IsDeleted?: boolean;
    IsHighPriority?: boolean;
    IsRecurrence?: boolean;
    IsReminderSet?: boolean;
    IsVisibleInSelfService?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    NetworkUserHistoryRecentToRecord?: NetworkUserHistoryRecent[];
    Owner?: SObject;
    OwnerId?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    Priority?: string;
    /**
     * <h3><b>Property</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Property__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Property__c?: string;
    /**
     * <h3><b>Property</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link Property__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Property__r?: Property__c;
    RecurrenceActivity?: Task;
    RecurrenceActivityId?: string;
    RecurrenceDayOfMonth?: number;
    RecurrenceDayOfWeekMask?: number;
    RecurrenceEndDateOnly?: Date;
    RecurrenceInstance?: string;
    RecurrenceInterval?: number;
    RecurrenceMonthOfYear?: string;
    RecurrenceRegeneratedType?: string;
    RecurrenceStartDateOnly?: Date;
    RecurrenceTimeZoneSidKey?: string;
    RecurrenceType?: string;
    RecurringTasks?: Task[];
    RelatedRecord?: FlowRecordRelation;
    ReminderDateTime?: string;
    Status?: string;
    Subject?: string;
    SurveySubjectEntities?: SurveySubject[];
    SystemModstamp?: string;
    Task?: EmailStatus;
    TaskRelations?: TaskRelation[];
    TaskSubtype?: string;
    TaskWhoRelations?: TaskWhoRelation[];
    TopicAssignments?: TopicAssignment[];
    Type?: string;
    What?: SObject;
    WhatCount?: number;
    WhatId?: string;
    Who?: SObject;
    WhoCount?: number;
    WhoId?: string;
}