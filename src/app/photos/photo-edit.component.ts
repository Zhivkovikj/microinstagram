import { Component, Input } from '@angular/core'
import {IPhoto} from '../photo.model'
import {IAlbum} from '../album.model'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {PhotosService} from '../photos.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare let toastr
@Component({
    selector: 'edit-url',
    template: `
        <div class="card" *ngIf="photo">
            <div class="card-header">
                <h2>Edit Form</h2>
            </div>  
             <div class="card-body">
            <form [formGroup]="formGroup">
            <div class="form-group">
                <label for="userID">Album ID</label>
                <input type="text" class="form-control" formControlName="albumId" id="albumID" placeholder="Enter Album ID">
            </div>
             <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" formControlName="title" id="title" placeholder="Enter Title">
            </div>
             <div class="form-group">
                <label for="url">Url</label>
                <input type="text" class="form-control" formControlName="url" id="url" placeholder="Enter Url">
                <img [src]="formGroup.get('url').value" class="image_slika1"/>
            </div>
             <div class="form-group">
                <label for="thumbnail-url">Thumbnail Url</label>
                <input type="text" class="form-control" formControlName="thumbnailUrl" id="thumbnail-url" placeholder="Enter Thumbnail Url">
                <img [src]="formGroup.get('thumbnailUrl').value" class="image_slika1"/>
            </div>
        </form>
            </div>
             <div class="card-footer">
                <button type="submit" class="btn btn-primary" (click)="clickSave(photo?.title)">Save</button>
                <button type="submit" class="btn" [routerLink]="'/photos'">Cancel</button>
            </div>
        </div>
        
    `,
    styles: [`
        .card{
           color: black;
           margin: 20px 0;
        }
        .image_slika1{
            height: 100px;
            width: 100px;
        }
    `]


})
export class PhotoEditComponent{
    album: IAlbum[]
    addMode: boolean
    photoUrl: string
    photo: IPhoto
    public formGroup: FormGroup;
    constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private photoService: PhotosService, private router: Router ){}
    
    ngOnInit(){
        this.route.paramMap.subscribe((routingParametars) => {
            this.photoService.getPhoto(+routingParametars.get("id")).subscribe(
                (_res) => {
                    this.photo = _res;
                    this.formGroup = this.formBuilder.group({
                        albumId: [this.photo.albumId],
                        title: [this.photo.title],
                        url: [this.photo.url],
                        thumbnailUrl: [this.photo.thumbnailUrl],
                    });
                }
            )
        });
    }
    clickSave(photoTitle){
        toastr.success('Saved')
        this.router.navigateByUrl(`/photos/${this.photo.id}`)
    }

}