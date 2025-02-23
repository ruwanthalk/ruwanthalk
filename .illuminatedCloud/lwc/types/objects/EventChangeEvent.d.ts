// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface EventChangeEvent extends SObject 
{
    Account?: Account;
    AccountId?: string;
    ActivityDate?: Date;
    ActivityDateTime?: string;
    ChangeEventHeader?: ChangeEventHeader;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    DurationInMinutes?: number;
    /**
     * <h3><b>Feedback</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Feedback__c?: string;
    GroupEventType?: string;
    IsAllDayEvent?: boolean;
    IsChild?: boolean;
    IsGroupEvent?: boolean;
    IsPrivate?: boolean;
    IsRecurrence?: boolean;
    IsRecurrence2Exclusion?: boolean;
    IsReminderSet?: boolean;
    IsVisibleInSelfService?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Location?: string;
    Owner?: User;
    OwnerId?: string;
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
    Recurrence2PatternText?: string;
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
    ReminderDateTime?: string;
    ReplayId?: string;
    ShowAs?: string;
    Subject?: string;
    Type?: string;
    What?: SObject;
    WhatCount?: number;
    WhatId?: string;
    Who?: SObject;
    WhoCount?: number;
    WhoId?: string;
}