import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../enums/role.enum";
// import {Permission,PermissionType,} from "src/security/authorization/permission.type";
import { Permission, PermissionType } from "../../security/authorization/permission.type";
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: Role, default: Role.Regular })
  role: Role;

  @Column({ enum: Permission, default: [], type: "json" })
  permissions: PermissionType[];
}
