import {Component} from '@angular/core'
import {PhotosService} from '../photos.service'
import {IPhoto} from '../photo.model';
import {IAlbum} from '../album.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'photo-details',
    template: `
            <div class="card" *ngIf="photo">
                <div class="card-header">
                    <span><button id="prvo" class="btn btn-secondary" [routerLink]="'/photos'">Back</button></span>
                    <span class="text-primary"><h2><b>Title:</b>{{photo.title}}</h2></span>
                </div>
                <div class="card-body">
                        <img [src]="photo.url" class="image_slika">
                        <div *ngIf="album"><h3><b>Belongs to album</b>: {{album.title}}</h3> </div>
                </div>
                <div class="card-footer" let i=photo.thumbnailUrl>
                    <button class="btn btn-primary" [routerLink]="editUrl">EDIT</button>
                    <button class="btn btn-secondary"
                            mwlConfirmationPopover
                            [popoverTitle]="'Delete form'"
                            [popoverMessage]="'Are you sure you want to delete this photo?'"
                            placement="left"
                            (confirm)="removePhotoElement(i)"
                            (cancel)="cancelClicked=true"
                            >
                    DELETE</button>
                </div>
            </div>
    `,
    styles: [`
        #prvo{
            float:left;
        }
        .card { text-align: center;
            margin: 20px 0;
         }
         .row{
             text-align: center;
         }
        .image-slika{ padding-left: 20px, padding-right: 20px; }
        .card { color: black; }
    `]
})
export class PhotoDetailsComponent{
    photo: IPhoto
    album: IAlbum
    editUrl: string
    constructor(
        private route: ActivatedRoute,
        private photoService: PhotosService,
        private router: Router
    ){}
    ngOnInit(){
        this.route.paramMap.subscribe((routingParametars) => {
            this.photoService.getPhoto(+routingParametars.get("id")).subscribe(
                (_res) => {
                    this.photo = _res;
                    this.editUrl = `/photos/edit/${this.photo.id}`;
                    this.photoService.getAlbum(this.photo.albumId).subscribe(
                        (_resAlbum) => {this.album = _resAlbum;}
                    );
                }   
            );
        });
    }
    removePhotoElement(){
        this.router.navigateByUrl(`/photos`)
    }
     
        
}