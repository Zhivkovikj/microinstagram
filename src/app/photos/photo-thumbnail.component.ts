import {Component, Input, OnChanges, SimpleChanges} from '@angular/core'
import {PhotosService} from '../photos.service'
import { IPhoto} from '../photo.model'
@Component({
    selector: 'photo-thumbnail',
    template: `
        <div class="card" [routerLink]="link">
           <div class="card-body">
                <img [src]="photo.thumbnailUrl"/>
           </div>
           <div class="card-footer">
                <span>{{photo.title}}</span>
           </div>
        </div>  
    `,
    styles: [`
        .card {
            cursor: pointer;
            display: inline-flex;
            width: 200px;
            text-align: center;
            margin: 20px 0;
        }

        .card-footer {
            height: 105px;
            overflow-y: hidden;
            color: #666666;
        }
    `]
})
export class PhotoThumbnailComponent implements OnChanges{
    @Input()
    photo: IPhoto
    link = ``
    //constructor(private photoThumbnail:PhotoThumbnailComponent){}

    ngOnChanges(changes:SimpleChanges) {
        if(changes["photo"])
            this.link = `/photos/${this.photo.id}`
    }

}