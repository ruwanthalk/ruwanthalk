// DO NOT EDIT: This file is managed by Illuminated Cloud. Any external changes will be discarded.

declare module "@salesforce/apex/EinsteinVision_Admin.createDatasetFromUrl" {
    export default function createDatasetFromUrl(params: {zipUrl: string}): Promise<void>;
}

declare module "@salesforce/apex/EinsteinVision_Admin.deleteDataset" {
    export default function deleteDataset(params: {datasetId: number}): Promise<void>;
}

declare module "@salesforce/apex/EinsteinVision_Admin.getCatLabels" {
    export default function getCatLabels(): Promise<EinsteinVision_Label[]>;
}

declare module "@salesforce/apex/EinsteinVision_Admin.getCatPrediction" {
    export default function getCatPrediction(params: {catId: string, fileName: string, base64: string}): Promise<void>;
}

declare module "@salesforce/apex/EinsteinVision_Admin.getDatasets" {
    export default function getDatasets(): Promise<EinsteinVision_Dataset[]>;
}

declare module "@salesforce/apex/EinsteinVision_Admin.getImageUrlFromAttachment" {
    export default function getImageUrlFromAttachment(params: {catId: string}): Promise<string>;
}

declare module "@salesforce/apex/EinsteinVision_Admin.trainDataset" {
    export default function trainDataset(params: {datasetId: number}): Promise<string>;
}