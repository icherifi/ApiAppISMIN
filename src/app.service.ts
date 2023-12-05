import { Injectable } from '@nestjs/common';
import { Hotel} from './app.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';

@Injectable()
export class AppService {

  constructor(
    @InjectModel(Hotel.name)
    private hotelModel: Model<Hotel>){}

  async addIsFavoriteProperty() {
    const hotels = await this.hotelModel.find(); // Retrieve all hotels
    for (const hotel of hotels) {
      hotel.isFavorite = false; // Set the default value for isFavorite
      await hotel.save(); // Save the updated hotel document
    }
  }

  async add(hotel: Hotel) {
    const newHotel = new this.hotelModel({
      nomCommercial: hotel.name,
    });
    return newHotel  
  }
    
  async getAll(): Promise<Hotel[]> { //
    return this.hotelModel.find();
  }

  async getHotelQuery(params : any): Promise<Hotel[]>{
    return await this.hotelModel.find(params).exec()
  }

  async getHotel(id: string): Promise<Hotel> {
  
    return await this.hotelModel.findOne({ _id: id }).exec()
  }

  async remove(id: string): Promise<void> {
    await this.hotelModel.deleteOne({ _id: id });
  }

  async favorite(id: string, body: any) : Promise<Hotel> {
    const isFavorite = body?.isFavorite;
    const hotel = await this.hotelModel.findByIdAndUpdate(id, { isFavorite });
    return await this.hotelModel.findOne({ _id: id }).exec()
  }

}
