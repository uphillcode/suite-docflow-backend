import { Module } from '@nestjs/common';
import { UserManagementController } from './user-management.controller';
import { UserManagementService } from './user-management.service';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { SecurityModule } from './security/security.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_TRAMITE_HOST || '',
      port: 3306,
      username: process.env.DB_TRAMITE_USER || '',
      password: process.env.DB_TRAMITE_PASS || '',
      database: process.env.DB_TRAMITE_DB || '',
      autoLoadEntities: true,

      // entities:[User,Role,PermissionEntity],
      synchronize: false,
      logging: (process.env.DB_TRAMITE_LOG == "true"),
      // logger: new CustomLogger()
    }),
    UserModule,
    AdminModule,
    SecurityModule
  ],
  controllers: [UserManagementController],
  providers: [UserManagementService],
})
export class UserManagementModule { }
