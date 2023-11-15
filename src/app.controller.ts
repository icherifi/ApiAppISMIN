import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Hotel } from './app.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {} 

  @Get("head")
  async getHeadHotels(): Promise<Hotel[]> {
    let hotels = await this.appService.getAll();
    hotels =  hotels.slice(0, 10);
    return hotels;
  }
  

  @Get("/findHotels") //Pour faire une query, avec plusieur parametres  
  findAny(@Query() parms: any) {
    return this.appService.getHotelQuery(parms)
  }

  @Get("/detail/:id")
  findOne(@Param('id') id: string) {
    return this.appService.getHotel(id)
  }

  @Post()
  add(@Body() hotel: Hotel) {
    return this.appService.add(hotel);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.appService.remove(id);
  }
}
