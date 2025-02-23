// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface Event extends SObject 
{
    AcceptedEventRelations?: AcceptedEventRelation[];
    Account?: Account;
    AccountId?: string;
    ActivityDate?: Date;
    ActivityDateTime?: string;
    ActivityFieldHistories?: ActivityFieldHistory[];
    AttachedContentDocuments?: AttachedContentDocument[];
    Attachments?: Attachment[];
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DeclinedEventRelations?: DeclinedEventRelation[];
    Description?: string;
    DurationInMinutes?: number;
    EndDate?: Date;
    EndDateTime?: string;
    Event?: EventRelationChangeEvent;
    EventRelations?: EventRelation[];
    EventSubtype?: string;
    EventWhoRelations?: EventWhoRelation[];
    /**
     * <h3><b>Feedback</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Feedback__c?: string;
    Feeds?: EventFeed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    GroupEventType?: string;
    IsAllDayEvent?: boolean;
    IsArchived?: boolean;
    IsChild?: boolean;
    IsDeleted?: boolean;
    IsGroupEvent?: boolean;
    IsPrivate?: boolean;
    IsRecurrence?: boolean;
    IsRecurrence2?: boolean;
    IsRecurrence2Exception?: boolean;
    IsRecurrence2Exclusion?: boolean;
    IsReminderSet?: boolean;
    IsVisibleInSelfService?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    Location?: string;
    Owner?: SObject;
    OwnerId?: string;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
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
    RecordType?: RecordType;
    RecordTypeId?: string;
    Recurrence2PatternStartDate?: string;
    Recurrence2PatternText?: string;
    Recurrence2PatternTimeZone?: string;
    Recurrence2PatternVersion?: string;
    RecurrenceActivity?: Event;
    RecurrenceActivityId?: string;
    RecurrenceDayOfMonth?: number;
    RecurrenceDayOfWeekMask?: number;
    RecurrenceEndDateOnly?: Date;
    RecurrenceInstance?: string;
    RecurrenceInterval?: number;
    RecurrenceMonthOfYear?: string;
    RecurrenceStartDateTime?: string;
    RecurrenceTimeZoneSidKey?: string;
    RecurrenceType?: string;
    RecurringEvents?: Event[];
    RelatedRecord?: FlowRecordRelation;
    ReminderDateTime?: string;
    ShowAs?: string;
    StartDateTime?: string;
    Subject?: string;
    SurveySubjectEntities?: SurveySubject[];
    SystemModstamp?: string;
    TopicAssignments?: TopicAssignment[];
    Type?: string;
    UndecidedEventRelations?: UndecidedEventRelation[];
    What?: SObject;
    WhatCount?: number;
    WhatId?: string;
    Who?: SObject;
    WhoCount?: number;
    WhoId?: string;
}