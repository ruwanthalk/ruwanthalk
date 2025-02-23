// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

/**
 * <h3><b>Country Map</b></h3>
 */
declare interface Country_Map__mdt extends SObject 
{
    DeveloperName?: string;
    /**
     * <h3><b>ISO Code</b></h3>
     * <h4>Field Attributes</h4>
     * <table border="0" valign="top">
     * <tr><td nowrap><b>Data Type:</b></td><td nowrap>Text(3)</td></tr>
     * <tr><td nowrap><b>Required:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>Unique:</b></td><td nowrap>false</td></tr>
     * <tr><td nowrap><b>External ID:</b></td><td nowrap>false</td></tr>
     * </table>
     */
    ISO_Code__c?: string;
    Label?: string;
    Language?: string;
    MasterLabel?: string;
    NamespacePrefix?: string;
    QualifiedApiName?: string;
    SystemModstamp?: string;
}