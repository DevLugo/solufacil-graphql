import { Controller, Get, HttpStatus, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller()
export class SocialAuthController {
  @Get('/facebook')
  @UseGuards(AuthGuard('facebook'))
  async facebookLogin(): Promise<any> {
    return HttpStatus.OK;
  }
  @Get('/test')
  @UseGuards(AuthGuard('facebook'))
  async test(@Req() req: Request): Promise<any> {
    return {
      statusCode: HttpStatus.OK,
    };
  }
  @Get('/facebook/redirect')
  @UseGuards(AuthGuard('facebook'))
  async facebookLoginRedirect(@Req() req: Request): Promise<any> {
    return {
      statusCode: HttpStatus.OK,
      data: req.user,
    };
  }
}
