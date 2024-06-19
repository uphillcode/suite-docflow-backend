
export enum EConnectionState {
    ACTIVE = "1",
    INACTIVE = "0"
}
                
export enum EConnectionStateLabel {
    ACTIVE = "Activo",
    INACTIVE = "Inactivo"
}
                
export enum EConnectionStateFilter {
    VOID = "",
    ACTIVE = EConnectionState.ACTIVE,
    INACTIVE = EConnectionState.INACTIVE
}
                