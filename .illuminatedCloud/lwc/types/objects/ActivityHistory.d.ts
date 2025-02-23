// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface ActivityHistory extends SObject 
{
    Account?: Account;
    AccountId?: string;
    ActivityDate?: Date;
    ActivityDateTime?: string;
    ActivitySubtype?: string;
    ActivityType?: string;
    AlternateDetail?: EmailMessage;
    AlternateDetailId?: string;
    CallDisposition?: string;
    CallDurationInSeconds?: number;
    CallObject?: string;
    CallType?: string;
    CompletedDateTime?: string;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    Description?: string;
    DurationInMinutes?: number;
    EndDateTime?: string;
    /**
     * <h3><b>Feedback</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Feedback__c?: string;
    IsAllDayEvent?: boolean;
    IsClosed?: boolean;
    IsDeleted?: boolean;
    IsHighPriority?: boolean;
    IsReminderSet?: boolean;
    IsTask?: boolean;
    IsVisibleInSelfService?: boolean;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    Location?: string;
    Owner?: SObject;
    OwnerId?: string;
    PrimaryAccount?: Account;
    PrimaryAccountId?: string;
    PrimaryWho?: SObject;
    PrimaryWhoId?: string;
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
    ReminderDateTime?: string;
    StartDateTime?: string;
    Status?: string;
    Subject?: string;
    SystemModstamp?: string;
    What?: SObject;
    WhatId?: string;
    Who?: SObject;
    WhoId?: string;
}