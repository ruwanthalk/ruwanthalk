// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Project Task</b></h3>
 * <p>Used for capturing the tasks that form part of the project in the Cloud Coach Fundamentals app (Formerly Cloud Coach Milestones)</p>
 */
declare interface CCMI__Milestone_Task__c extends SObject 
{
    ActivityHistories?: ActivityHistory[];
    AttachedContentDocuments?: AttachedContentDocument[];
    Attachments?: Attachment[];
    /**
     * <h3><b>Assignments</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Long Text Area(32768)</td></tr>
     * </table>
     */
    CCMI__Assignments__c?: string;
    /**
     * <h3><b>Calculated Duration</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CCMI__Duration__c + &#47;&#42; Add 2 days for each full week &#42;&#47; (FLOOR(CCMI__Duration__c / 5) * 2) + &#47;&#42; Determine the day of the week that the task is scheduled to end on, and adjust for the next working day 5/6/7: Weekend, add an additional 2 days -1: Started Monday and duration in full weeks, subtract 2 extra days added from full week calculation &#42;&#47; CASE(MOD(CCMI__Start__c - DATE(1900, 1, 8), 7) + MOD(CCMI__Duration__c, 5) - 1, 5, 2, 6, 2, 7, 2, -1, -2, 0 )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CCMI__Calculated_Duration__c?: number;
    CCMI__Child_Tasks__r?: Milestone_Task__c[];
    /**
     * <h3><b>Completed Date</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CCMI__Completed_Date__c?: Date;
    /**
     * <h3><b>Completion Percent</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Percent(16,2)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(ISPICKVAL(CCMI__Status__c, &#39;Completed&#39;), 1, IF(ISBLANK(CCMI__Total_Sub_Tasks__c) || CCMI__Total_Sub_Tasks__c == 0, 0, CCMI__Total_Completed_Sub_Tasks__c / CCMI__Total_Sub_Tasks__c ) )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CCMI__Completion_Percent__c?: number;
    /**
     * <h3><b>Completion Status</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(ISBLANK(CCMI__Completed_Date__c), &#47;&#42; If not completed date, then consider the task incomplete &#42;&#47; &#39;Incomplete&#39;, CASE(MAX(CCMI__Completed_Date__c - CCMI__Start__c - CCMI__Calculated_Duration__c, -1), -1, &#39;Early&#39;, 0, &#39;On Time&#39;, &#39;Late&#39; ) )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CCMI__Completion_Status__c?: string;
    /**
     * <h3><b>Description</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text Area</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CCMI__Description__c?: string;
    /**
     * <h3><b>Desired Start Date</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>true</td></tr>
     * </table>
     */
    CCMI__Desired_Start__c?: Date;
    /**
     * <h3><b>Duration</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>true</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CCMI__Duration__c?: number;
    /**
     * <h3><b>End Date (Calculated)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">BLANKVALUE(CCMI__Completed_Date__c, CCMI__Start__c + CCMI__Calculated_Duration__c - 1)</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CCMI__End__c?: Date;
    /**
     * <h3><b>Estimated Hours</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CCMI__Estimated_Hours__c?: number;
    /**
     * <h3><b>Hourly Rate</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Currency(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CCMI__Hourly_Rate__c?: number;
    /**
     * <h3><b>Late</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">NOT(ISPICKVAL(CCMI__Status__c, &#39;Completed&#39;)) &amp;&amp; CCMI__End__c &lt; TODAY()</code></td></tr>
     * </table>
     */
    CCMI__IsLate__c?: boolean;
    CCMI__Milestone_Assignments2__r?: Milestone_Assignment2__c[];
    CCMI__Milestone_Assignments__r?: Milestone_Assignment__c[];
    /**
     * <h3><b>Phase</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link CCMI__Milestone_Phase__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CCMI__Milestone_Phase__c?: string;
    /**
     * <h3><b>Phase</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link CCMI__Milestone_Phase__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CCMI__Milestone_Phase__r?: CCMI__Milestone_Phase__c;
    /**
     * <h3><b>Project</b></h3>
     * <p>Detail record to a Milestone Project record</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link CCMI__Milestone_Project__c})</td></tr>
     * </table>
     */
    CCMI__Milestone_Project__c?: string;
    /**
     * <h3><b>Project</b></h3>
     * <p>Detail record to a Milestone Project record</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Master Detail({@link CCMI__Milestone_Project__c})</td></tr>
     * </table>
     */
    CCMI__Milestone_Project__r?: CCMI__Milestone_Project__c;
    CCMI__Milestone_Sub_Tasks__r?: Milestone_Sub_Task__c[];
    /**
     * <h3><b>Parent Task</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link CCMI__Milestone_Task__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CCMI__Parent__c?: string;
    /**
     * <h3><b>Parent Task</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Lookup({@link CCMI__Milestone_Task__c})</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CCMI__Parent__r?: CCMI__Milestone_Task__c;
    /**
     * <h3><b>Parent End Date</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CCMI__Parent_End__c?: Date;
    /**
     * <h3><b>Show in External View</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Checkbox</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">true</code></td></tr>
     * </table>
     */
    CCMI__Show_External__c?: boolean;
    /**
     * <h3><b>Start Date (Calculated)</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">IF(CCMI__Completed_Date__c &lt;= CCMI__Desired_Start__c || CCMI__Completed_Date__c &lt;= CCMI__Parent_End__c, CCMI__Completed_Date__c, IF(ISBLANK(CCMI__Parent_End__c) || CCMI__Desired_Start__c &gt; CCMI__Parent_End__c, &#47;&#42; Use desired start if after parent end (or if there is no parent) &#42;&#47; CCMI__Desired_Start__c, &#47;&#42; Otherwise, set to Parent End + 1, adjusted for weekends &#42;&#47; CCMI__Parent_End__c + CASE(MOD(CCMI__Parent_End__c - DATE(1900, 1, 8), 7), 4, 3, 5, 2, 1 ) ) )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CCMI__Start__c?: Date;
    /**
     * <h3><b>Status</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>true</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Default</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Not Started</code></td><td>Not Started</td><td nowrap>true</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">In Progress</code></td><td>In Progress</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Completed</code></td><td>Completed</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">On Hold</code></td><td>On Hold</td><td nowrap>&nbsp;</td><td nowrap>true</td></tr>
     * </table>
     */
    CCMI__Status__c?: string;
    /**
     * <h3><b>Status Enum</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE(CCMI__Status__c, &#39;Not Started&#39;, 0, &#39;In Progress&#39;, 1, &#39;Completed&#39;, 2, -1 )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CCMI__Status_Enum__c?: number;
    CCMI__Time_Entries__r?: Work__c[];
    /**
     * <h3><b>Timeline Health</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE(CCMI__Status_Enum__c, 2, &#39;Green&#39;, -1, &#39;N/A&#39;, IF(CCMI__End__c &lt; TODAY(), &#39;Red&#39;, IF(CCMI__Status_Enum__c == 0 &amp;&amp; CCMI__Start__c &lt; TODAY(), &#39;Yellow&#39;, &#39;Green&#39;) ) )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CCMI__Timeline_Health__c?: string;
    /**
     * <h3><b>Timeline Health Reason</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text</td></tr>
     * <tr><td nowrap><b>Formula:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CASE(CCMI__Status_Enum__c, 2, &#39;Task is complete&#39;, -1, IF(ISPICKVAL(CCMI__Status__c, &#39;On Hold&#39;), &#39;Task is on hold&#39;, &#39;&#39;), IF(CCMI__End__c &lt; TODAY(), &#39;Task is ending late&#39;, IF(CCMI__Status_Enum__c == 0 &amp;&amp; CCMI__Start__c &lt; TODAY(), &#39;Task is starting late&#39;, &#39;Task is on time&#39;) ) )</code></td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    CCMI__Timeline_Health_Reason__c?: string;
    /**
     * <h3><b>Total Completed Sub Tasks</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">COUNT</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CCMI__Milestone_Sub_Task__c.CCMI__Milestone_Task__c</code></td></tr>
     * <tr><td nowrap><b>Summary Filter Criteria:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CCMI__Milestone_Sub_Task__c.CCMI__IsComplete__c EQUALS True</code><br/>
     * </td></tr>
     * </table>
     */
    CCMI__Total_Completed_Sub_Tasks__c?: number;
    /**
     * <h3><b>Total Sub Tasks</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Summary</td></tr>
     * <tr><td nowrap><b>Summary Operation:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">COUNT</code></td></tr>
     * <tr><td nowrap><b>Summary Foreign Key:</b></td><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">CCMI__Milestone_Sub_Task__c.CCMI__Milestone_Task__c</code></td></tr>
     * </table>
     */
    CCMI__Total_Sub_Tasks__c?: number;
    /**
     * <h3><b>Type</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Legals</code></td><td>Legals</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Marketing</code></td><td>Marketing</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Operations</code></td><td>Operations</td><td nowrap>true</td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">Sales</code></td><td>Sales</td><td nowrap>true</td></tr>
     * </table>
     */
    CCMI__Type__c?: string;
    /**
     * <h3><b>Entered Hours</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(16,2)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Default Value:</b></td><td><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">0</code></td></tr>
     * </table>
     */
    CCMI__Worked_Hours__c?: number;
    CombinedAttachments?: CombinedAttachment[];
    ContactRequests?: ContactRequest[];
    ContentDocumentLinks?: ContentDocumentLink[];
    ContextRecord?: FlowExecutionErrorEvent;
    CreatedBy?: User;
    CreatedById?: string;
    CreatedDate?: string;
    DuplicateRecordItems?: DuplicateRecordItem[];
    Emails?: EmailMessage[];
    EventRelations?: EventRelation[];
    Events?: Event[];
    Feeds?: Milestone_Task__Feed[];
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    FlowOrchestrationWorkItems?: FlowOrchestrationWorkItem[];
    Histories?: Milestone_Task__History[];
    IsDeleted?: boolean;
    LastActivityDate?: Date;
    LastModifiedBy?: User;
    LastModifiedById?: string;
    LastModifiedDate?: string;
    LastReferencedDate?: string;
    LastViewedDate?: string;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    Name?: string;
    NetworkUserHistoryRecentToRecord?: NetworkUserHistoryRecent[];
    Notes?: Note[];
    NotesAndAttachments?: NoteAndAttachment[];
    OpenActivities?: OpenActivity[];
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    PrimaryRecord?: PendingServiceRoutingInteractionInfo;
    ProcessInstances?: ProcessInstance[];
    ProcessSteps?: ProcessInstanceHistory[];
    Record?: CollaborationGroupRecordChangeEvent;
    RecordActionHistories?: RecordActionHistory[];
    RecordActions?: RecordAction[];
    RecordAssociatedGroups?: CollaborationGroupRecord[];
    RelatedRecord?: ContentDistribution;
    RelatedTo?: EmailMessageChangeEvent;
    Relation?: EventRelationChangeEvent;
    Subject?: SurveySubjectChangeEvent;
    SurveySubjectEntities?: SurveySubject[];
    SystemModstamp?: string;
    TargetObject?: PendingServiceRoutingInteractionInfo;
    TaskRelations?: TaskRelation[];
    Tasks?: Task[];
    TopicAssignments?: TopicAssignment[];
    What?: EventChangeEvent;
    WorkItem?: AgentWork;
}