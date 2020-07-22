import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { IPhoto } from './photo.model'
import { IAlbum } from './album.model'

@Injectable()
export class PhotosService{
    constructor(private http: HttpClient){}

    getPhotos():Observable<IPhoto[]>{
        return this.http.get<IPhoto[]>('http://jsonplaceholder.typicode.com/photos');
    }
    getPhoto(id:number):Observable<IPhoto>{
        return this.http.get<IPhoto>(`http://jsonplaceholder.typicode.com/photos/${id}`);
    }
    getAlbum(id:number):Observable<IAlbum>{
        return this.http.get<IAlbum>(`http://jsonplaceholder.typicode.com/albums/${id}`);
    }

}