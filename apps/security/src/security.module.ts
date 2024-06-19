import { Module } from '@nestjs/common';
import { SecurityController } from './security.controller';
import { SecurityService } from './security.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [JwtModule,
    ConfigModule.forRoot({ isGlobal: true, }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_TRAMITE_HOST || '',
      port: 3306,
      username: process.env.DB_TRAMITE_USER || '',
      password: process.env.DB_TRAMITE_PASS || '',
      database: process.env.DB_TRAMITE_DB || '',
      autoLoadEntities: true,
      entities:[],
      synchronize: false,
      logging: (process.env.DB_TRAMITE_LOG == "true"),
      // logger: new CustomLogger()
      
    }),

    //LOS MODULOS PARA ADD
  ],
  controllers: [SecurityController],
  providers: [SecurityService],
})
export class SecurityModule { }
