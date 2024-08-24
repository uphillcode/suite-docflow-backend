import { IntersectionType, OmitType, PartialType, PickType } from "@nestjs/mapped-types";
// import { EExportType } from "apps/shared/enums/EExportType";
import { IsEnum, IsIn, IsNumber, IsNumberString, IsOptional, IsPositive, IsString, MaxLength, MinLength, isNumber, minLength } from "class-validator";
import { Transform } from "class-transformer";
import { EDocumentTrackingStateFilter, EExportType } from "../interface/document-tracking.interface";
import { AllDocumentTrackingDto } from "./detail.dto";

export class WhereDocumentTrackingDto extends PickType(AllDocumentTrackingDto, ['id']) { }
export class DataDocumentTrackingDto extends WhereDocumentTrackingDto { }
export class CreateDocumentTrackingDto extends OmitType(AllDocumentTrackingDto, ['id']) { }

export class UpdateDocumentTrackingDto extends PartialType(OmitType(AllDocumentTrackingDto, ['id'])) { }
export class ResUpdateDocumentTrackingDto extends IntersectionType(WhereDocumentTrackingDto, UpdateDocumentTrackingDto) { }

export class DeleteDocumentTrackingDto extends WhereDocumentTrackingDto { }

export class StateDocumentTrackingDto extends PickType(AllDocumentTrackingDto, ['current_status']) { }
export class ResStateDocumentTrackingDto extends IntersectionType(WhereDocumentTrackingDto, StateDocumentTrackingDto) { }

export class FilterDocumentTrackingDto extends PartialType(PickType(AllDocumentTrackingDto, ['current_location', 'last_updated'])) {
    @IsOptional()
    @IsString()
    @MaxLength(15, { message: 'El texto debe tener como máximo 15 caracteres' })
    texto?: string;

    @IsOptional()
    @IsString()
    @IsEnum(EDocumentTrackingStateFilter, { message: 'El state no es reconocido' })
    state?: EDocumentTrackingStateFilter;
}
export class ExportDocumentTrackingDto extends FilterDocumentTrackingDto {
    @IsString()
    @IsEnum(EExportType, { message: 'El tipo de exportación no es reconocido' })
    type_export: string;

    @IsString()
    @MinLength(1, { message: 'El url debe tener al menos 1 caracter' })
    url: string;
}


// export class ExportType {
//     @IsString()
//     @IsEnum(EExportType, { message: 'El tipo de exportacion no es reconocido' })
//     type_export: string;

//     @IsString()
//     @MinLength(1, { message: 'El URL debe tener al menos un caracter' })
//     url: string;
// }