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
import { Hotel } from './app.schema';
import { Model } from 'mongoose';
export declare class AppService {
    private hotelModel;
    constructor(hotelModel: Model<Hotel>);
    addIsFavoriteProperty(): Promise<void>;
    add(hotel: Hotel): Promise<import("mongoose").Document<unknown, {}, Hotel> & Hotel & Required<{
        _id: import("mongoose").Schema.Types.ObjectId;
    }>>;
    getAll(): Promise<Hotel[]>;
    getHotelQuery(params: any): Promise<Hotel[]>;
    getHotel(id: string): Promise<Hotel>;
    remove(id: string): Promise<void>;
    favorite(id: string, body: any): Promise<Hotel>;
}
