import { IsEnum, IsNumber, IsString, MaxLength, IsDateString, IsDate, IsInt, IsPositive } from "class-validator";
import { EDocumentTrackingState } from "../interface/document-tracking.interface";

export class AllDocumentTrackingDto {

    @IsInt()
    @IsPositive()
    id: number;
    @IsString()
    @MaxLength(15, { message: 'El  debe tener como máximo 15 caracteres' })
    current_status: EDocumentTrackingState;
    @IsString()
    @MaxLength(15, { message: 'El  debe tener como máximo 15 caracteres' })
    current_location: string;
    @IsInt()
    @IsPositive()
    document_id: number;
    @IsDateString()
    last_updated: string;

}
