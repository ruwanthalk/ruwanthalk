// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Application Configuration</b></h3>
 * <p>All configurations for application</p>
 */
declare interface Application_Configuration__mdt extends SObject 
{
    DeveloperName?: string;
    Label?: string;
    Language?: string;
    MasterLabel?: string;
    NamespacePrefix?: string;
    QualifiedApiName?: string;
    SystemModstamp?: string;
    /**
     * <h3><b>Type</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Picklist</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * </table>
     * <h4>Picklist Values</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>API Name</b></td><td nowrap><b>Label</b></td><td nowrap><b>Default</b></td><td nowrap><b>Active</b></td></tr>
     * <tr><td nowrap><code style="background-color: rgba(174, 184, 193, 0.2); border-width: 0; padding: 1px 4px; margin: 1px 0;">ChatGPT API Key</code></td><td>ChatGPT API Key</td><td nowrap>true</td><td nowrap>true</td></tr>
     * </table>
     */
    Type__c?: string;
    /**
     * <h3><b>Value</b></h3>
     * <p>Any value</p>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(255)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    Value__c?: string;
}