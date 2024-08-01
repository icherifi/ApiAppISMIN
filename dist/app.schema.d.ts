/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { HydratedDocument, ObjectId } from 'mongoose';
export type HotelDocument = HydratedDocument<Hotel>;
export declare class Hotel {
    _id: ObjectId;
    name: String;
    adress: String;
    latitude: Number;
    longitude: Number;
    phone: String;
    numRooms: Number;
    webUrl: String;
    gis_id: String;
    objectId: Number;
    zipCode: Number;
    isFavorite: Boolean;
}
export declare const HotelSchema: import("mongoose").Schema<Hotel, import("mongoose").Model<Hotel, any, any, any, import("mongoose").Document<unknown, any, Hotel> & Hotel & Required<{
    _id: import("mongoose").Schema.Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Hotel, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Hotel>> & import("mongoose").FlatRecord<Hotel> & Required<{
    _id: import("mongoose").Schema.Types.ObjectId;
}>>;
