
export enum EDocumentTrackingState {
    ACTIVE = "1",
    INACTIVE = "0"
}
                
export enum EDocumentTrackingStateLabel {
    ACTIVE = "Activo",
    INACTIVE = "Inactivo"
}
                
export enum EDocumentTrackingStateFilter {
    VOID = "",
    ACTIVE = EDocumentTrackingState.ACTIVE,
    INACTIVE = EDocumentTrackingState.INACTIVE
}
                
export enum EExportType {
    PDF = "PDF",
    EXCEL = "EXCEL"
}
         