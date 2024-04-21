import { createParamDecorator, BadRequestException } from '@nestjs/common';
import { ArgsOptions } from '@nestjs/graphql';
import { HttpException, HttpStatus } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

export const  ValidateInput = async(classType: any, args:any): Promise<any> => {
  const input:any[] = Array.isArray(args) ? args : [args];
  const errors = [];
  console.log("HOLA1")
  console.log(input)
  for (const obj of input) {
    console.log(obj);
    const class2validate = plainToClass(classType, obj);
    console.log("HOLA2");
    const objErrors = await validate(class2validate, { skipMissingProperties: true });
    console.log("HOLA3", objErrors);
    
    if (objErrors.length > 0) {
      errors.push(objErrors[0].constraints);
    }
  }
  if (errors.length > 0) {
    console.log("HOL3");
    throw new BadRequestException(errors);
  }
  //return input.length === 1 ? input[0] : input;
};