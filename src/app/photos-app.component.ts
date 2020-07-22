import {Component} from '@angular/core'

@Component({
    selector: 'events-app',
    template: `
        <div class="container">
            <a [routerLink]="'/'"><h1 id="naslov">@MicroInstagram</h1></a>
            <button class="btn btn-primary" [routerLink]="'/photos/upload'">UPLOAD</button>
        </div>
        <router-outlet></router-outlet>
        <hr>
       
        `,
    styles: [`
        .container, #naslov a {
            color: #485563;
        }
        .container{
            height: 100px;
            width:100%;
            background-color:white;
        }`,
        `#naslov{
            float: right;
            padding-right: 100px;
        }
        .btn btn-secondary{
            cursor: pointer;
        }
    `]
     

})
export class PhotosAppComponent{
    constructor(){}   


}