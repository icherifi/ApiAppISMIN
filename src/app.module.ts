import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Hotel, HotelSchema } from './app.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://icherifi:D5Uc2PYTd5bnm9sR@cluster0.ncsbj16.mongodb.net/hotel_data'),
    MongooseModule.forFeature([
      { name: 'hotel', schema: HotelSchema },
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
