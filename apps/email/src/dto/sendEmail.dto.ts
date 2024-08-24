import { ArrayMinSize, ArrayNotEmpty, IsArray, IsBoolean, IsDate, IsEmail, IsNotEmpty, IsNumber, IsObject, IsOptional, IsPositive, IsString, IsUrl, ValidateNested } from "class-validator";
import { ICompany, IEmail, IEmailConfig } from "../interface";
import { Type } from "class-transformer";

export class sendEmailDto {

    @ValidateNested({ each: true })
    @Type(() => emailDto)
    email: IEmail;

    @ValidateNested({ each: true })
    @Type(() => emailConfigDto)
    emailConfig: IEmailConfig;

    @ValidateNested({ each: true })
    @Type(() => companyDto)
    company: ICompany;
}

export class emailDto {
    @IsEmail()
    from: string;
    @IsEmail()
    recipient: string;
    @IsString()
    office: string
    @IsString()
    subject: string;
    @IsString()
    body: string;

    @IsOptional()
    @IsArray()
    @ArrayMinSize(1)
    @ValidateNested({ each: true })
    @Type(() => AttachmentDto)
    attachments?: AttachmentDto[];

    @IsOptional()
    @IsString()
    date?: string;
}

class AttachmentDto {
    @IsString()
    filename: string;

    @IsString()
    path: string;
}
class emailConfigDto {
    @IsString()
    SMTPServer: string;
    @IsPositive()
    @IsNumber()
    port: number;
    @IsOptional()
    @IsString()
    path?: string
    @IsString()
    host?: string;
    @IsString()
    user?: string;
    @IsString()
    password?: string;
    @IsString()
    defaultEmail?: string;
    @IsString()
    defaultName?: string;
    @IsBoolean()
    ignoreTLS?: boolean;
    @IsBoolean()
    secure?: boolean;
    @IsBoolean()
    requireTLS?: boolean;
}

class SocialMediaDto {
    @IsOptional()
    @IsString()
    x?: string;

    @IsOptional()
    @IsString()
    linkedin?: string;

    @IsOptional()
    @IsString()
    facebook?: string;
}

class PrimaryContactDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    email?: string;

    @IsOptional()
    @IsString()
    phone?: string;
}

class AddressDto {
    @IsOptional()
    @IsString()
    street?: string;

    @IsOptional()
    @IsString()
    city?: string;

    @IsOptional()
    @IsString()
    state?: string;

    @IsOptional()
    @IsString()
    postalCode?: string;

    @IsOptional()
    @IsString()
    country?: string;
}

export class companyDto {
    @IsOptional()
    @IsNumber()
    id?: number;

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    type?: string;

    @IsOptional()
    @IsString()
    industry?: string;

    @IsOptional()
    @IsNumber()
    employees?: number;

    @IsOptional()
    @IsUrl()
    website?: string;

    @IsOptional()
    @IsDate()
    founded?: Date;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsUrl()
    logo?: string;

    @IsOptional()
    @IsObject()
    @ValidateNested()
    @Type(() => SocialMediaDto)
    socialMedia?: SocialMediaDto;

    @IsOptional()
    @IsObject()
    @ValidateNested()
    @Type(() => PrimaryContactDto)
    primaryContact?: PrimaryContactDto;

    @IsOptional()
    @IsObject()
    @ValidateNested()
    @Type(() => AddressDto)
    address?: AddressDto;
}