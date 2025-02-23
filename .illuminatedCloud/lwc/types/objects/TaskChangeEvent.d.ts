// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface TaskChangeEvent extends SObject 
{
    Account?: Account;
    AccountId?: string;
    ActivityDate?: Date;
    CallDisposition?: string;
    CallDurationInSeconds?: number;
    CallObject?: string;
    CallType?: string;
    ChangeEventHeader?: ChangeEventHeader;
    CompletedDateTime?: string;
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
    IsClosed?: boolean;
    IsRecurrence?: boolean;
    IsReminderSet?: boolean;
    IsVisibleInSelfService?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Owner?: User;
    OwnerId?: string;
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
    ReminderDateTime?: string;
    ReplayId?: string;
    Status?: string;
    Subject?: string;
    Type?: string;
    What?: SObject;
    WhatCount?: number;
    WhatId?: string;
    Who?: SObject;
    WhoCount?: number;
    WhoId?: string;
}