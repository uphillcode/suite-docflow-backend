import { NestFactory } from '@nestjs/core';
import { UserManagementModule } from './user-management.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';
import cors from '@fastify/cors'
// import { join } from 'path';
// import multer from 'multer';
// import * as multer from 'fastify-multer';
import * as fastifyMultipart from 'fastify-multipart';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    UserManagementModule,
    new FastifyAdapter({ logger: true }),
    {
      logger: ['error', 'warn', 'log', 'debug', 'verbose']
    }
  );

  // Habilita CORS utilizando el plugin fastify-cors
  app.register(cors, {
    origin: true, // Esto permite a cualquier origen acceder a tu API
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS', 'PATCH'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeceras permitidas
    // credentials: true, // Habilita el envío de credenciales (cookies, por ejemplo)
  });


  //  console.log(__dirname);
  console.log(`STORAGE: ${process.env.STORAGE}`);
  console.log(__dirname)
  app.useStaticAssets({
    //   root: join(__dirname, '..', 'src/public'),
    root: [process.env.STORAGE],
    prefix: '/public/',
  });

  // app.setGlobalPrefix('v1/');

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true
  }));

  // UPLOAD 

  // // Configura multer con el almacenamiento y las opciones deseadas
  // const storage = multer.diskStorage({
  //    destination: (req, file, cb) => {
  //       cb(null, './uploads/'); // Especifica el directorio de destino de las subidas
  //    },
  //    filename: (req, file, cb) => {
  //       cb(null, file.originalname);
  //    },
  // });

  // const upload = multer({ storage });

  // // Registra el middleware de multer en la aplicación
  // app.register(upload.contentParser);

  // Registra el middleware de fastify-multipart en la aplicación
  // app.register(fastifyMultipart);
  app.register(fastifyMultipart, { attachFieldsToBody: true });
  // app.register(fastifyMultipart, { attachFieldsToBody: 'keyValues' });

  await app.listen(3000);
}


// PROTOTYPES
declare global {

  interface String {
    clear_coma(...args: string[]): string;
    zfill(...args: number[]): string;
    redondear(...args: number[]): number;
    toDate(...args: string[]): Date;
  }
  interface Number {
    zfill(...args: number[]): string;
    redondear(...args: number[]): number;
  }

  interface Date {
    addMonths(...args: number[]): Date;
    isLeapYear(...args: number[]): Date;
    getDaysInMonth(...args: number[]): Date;
    addDays(...args: number[]): Date;
  }

  interface Array<T> {
    filterBy(...args: any[]): Array<T>;
  }

  interface MyEventTarget extends EventTarget {
    result: string;
  }

  interface DateConstructor {
    getDaysInMonth: any;
    isLeapYear: any;
  }
}

String.prototype.redondear = function (numero) {
  var t = parseFloat(this + "");
  var multiplicator = Math.pow(10, numero);
  t = parseFloat((t * multiplicator).toFixed(11));
  return Math.round(t) / multiplicator;
}

Number.prototype.redondear = function (numero) {
  var t = parseFloat(this + "");
  var multiplicator = Math.pow(10, numero);
  t = parseFloat((t * multiplicator).toFixed(11));
  return Math.round(t) / multiplicator;
}

String.prototype.clear_coma = function () {
  let element: string = this + "";
  var inicio = element.substring(0, 1);
  var final = element.substring(element.length - 1);
  if (inicio == ",")
    element = element.substring(1);
  if (final == ",")
    element = element.substring(0, element.length - 1);
  return element;
}

String.prototype.zfill = function (size) {
  var numb: string = this + "";
  while (numb.length < (size || 2)) {
    numb = '0' + numb;
  }
  return numb;
}

Number.prototype.zfill = function (size) {
  var numb = String(this);
  while (numb.length < (size || 2)) {
    numb = '0' + numb;
  }
  return numb;
}

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

Array.prototype.filterBy = function (params, strict = true) {
  return this.filter((item) => {
    let result = true;
    for (const key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        const element = (params[key] + "").toLowerCase();
        const item_value = (item[key] + "").toLowerCase();
        if (strict) {
          if (item_value != element) {
            result = false;
          }
        } else if (!item_value.includes(element)) {
          result = false;
        }
      }
    }
    return result;
  });
}

bootstrap();
