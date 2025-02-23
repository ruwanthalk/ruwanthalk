// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Orders</b></h3>
 * <p>Orders</p>
 */
declare interface Orders__x extends SObject 
{
    AttachedContentDocuments?: AttachedContentDocument[];
    CombinedAttachments?: CombinedAttachment[];
    ContentDocumentLinks?: ContentDocumentLink[];
    /**
     * <h3><b>customerID</b></h3>
     * <p>customerID</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    customerID__c?: number;
    DisplayUrl?: string;
    ExternalId?: string;
    FeedSubscriptionsForEntity?: EntitySubscription[];
    FirstPublishLocation?: ContentVersion;
    LinkedEntity?: ContentDocumentLinkChangeEvent;
    /**
     * <h3><b>orderDate</b></h3>
     * <p>orderDate</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date Time</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    orderDate__c?: string;
    /**
     * <h3><b>orderID</b></h3>
     * <p>orderID</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Number(18,0)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    orderID__c?: number;
    Parent?: FeedComment;
    ParentEntities?: NetworkActivityAudit[];
    ParentRecord?: NetworkFeedResponseMetric;
    /**
     * <h3><b>shippedDate</b></h3>
     * <p>shippedDate</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Date Time</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    shippedDate__c?: string;
}