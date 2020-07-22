import { Component, OnInit, ViewChild } from '@angular/core'
import {PhotosService} from '../photos.service'
import {IPhoto} from '../photo.model'
@Component({
    selector: 'events-list',
    template: `
        <div *ngIf="photosDisplayed" class="text-center">
            <photo-thumbnail class="col-md-3" *ngFor="let photo of photosDisplayed" [photo]="photo"></photo-thumbnail>
        </div>
        <hr>
        <div class="footer">
            <button class="btn btn-primary" (click)="changeOn()">Load More Photos</button>
        </div>
    `,
    styles: [`
        
    `]
  
})
export class PhotosListComponent implements OnInit{
    photos:IPhoto[]
    allPhotos: IPhoto[]
    photosDisplayed: IPhoto[]
    currentPhotosListSize: number
    constructor(private photosService: PhotosService){}
    
    ngOnInit(){
        this.currentPhotosListSize = 50;
        this.photosService.getPhotos().subscribe((_res)=> {
                this.allPhotos = _res;
                this.updatePhotosDispayed();
            }, 
            (_err) => {
                console.log('Failed to fetch photos from api')
            }
        );
    }

    updatePhotosDispayed() {
        this.photosDisplayed = this.allPhotos.slice(0,this.currentPhotosListSize);
    }
    
    changeOn(){
        this.currentPhotosListSize+=30
        this.updatePhotosDispayed();
    }
  
}