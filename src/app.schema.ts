import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';


export type HotelDocument = HydratedDocument<Hotel>;

@Schema({ collection: 'hotel_coll' })
export class Hotel{
    _id : ObjectId
    name : String
    adress : String
    latitude : Number
    longitude : Number
    phone : String
    numRooms : Number
    webUrl : String
    gis_id : String
    objectId : Number
    zipCode : Number   

}

export const HotelSchema = SchemaFactory.createForClass(Hotel);