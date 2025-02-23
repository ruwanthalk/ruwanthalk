// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare interface LightningUsageByFlexiPageMetrics extends SObject 
{
    CoresBin2To4?: number;
    CoresBin4To8?: number;
    CoresBinOver8?: number;
    CoresBinUnder2?: number;
    DownlinkBin3To5?: number;
    DownlinkBin5To8?: number;
    DownlinkBin8To10?: number;
    DownlinkBinOver10?: number;
    DownlinkBinUnder3?: number;
    EptBin3To5?: number;
    EptBin5To8?: number;
    EptBin8To10?: number;
    EptBinOver10?: number;
    EptBinUnder3?: number;
    FlexiPageNameOrId?: string;
    FlexiPageType?: string;
    MedianEPT?: number;
    MetricsDate?: Date;
    RecordCountEPT?: number;
    RttBin50To150?: number;
    RttBinOver150?: number;
    RttBinUnder50?: number;
    SumEPT?: number;
    SystemModstamp?: string;
    TotalCount?: number;
}