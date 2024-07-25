import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from '@nestjs-modules/mailer';
import { SurveiesModule } from './surveies/surveies.module';
import { TitlesModule } from './titles/titles.module';
import { MunicipalitiesModule } from './municipalities/municipalities.module';
import { RunAppFromNosModule } from './run_app_from_nos/run_app_from_nos.module';
import { ProvincesModule } from './provinces/provinces.module';
import { DistrictsModule } from './districts/districts.module';
import { SubdistrictsModule } from './subdistricts/subdistricts.module';
import { BanksModule } from './banks/banks.module';
import { ComitteeFundsModule } from './comittee_funds/comittee_funds.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { ConfigsModule } from './configs/configs.module';
import { MembersModule } from './members/members.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { RolePermissionsModule } from './role_permissions/role_permissions.module';
import { FunctionsModule } from './functions/functions.module';
import { MenusModule } from './menus/menus.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.registerAsync({
      global: true,
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: configService.get<string>('JWT_EXPIRATION'), 
          // expiresIn: '3d',
        },
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      // entities: [User],
      entities: ['dist/**/*.entity.js'],
      autoLoadEntities: true,
    }),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: 'app.cloud.service@gmail.com',
          pass: 'xgeanlvcsgrmphbu',
        },
      },
      defaults: {
        from: 'System Village Fund',
      },
    }),
    SurveiesModule,
    TitlesModule,
    MunicipalitiesModule,
    RunAppFromNosModule,
    ComitteeFundsModule,
    ProvincesModule,
    DistrictsModule,
    SubdistrictsModule,
    BanksModule,
    ConfigsModule,
    MembersModule,
    AuthModule,
    RolesModule,
    RolePermissionsModule,
    JwtModule,
    FunctionsModule,
    MenusModule
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    AppService,
  ],
  exports:[AppService]
})
export class AppModule {}
