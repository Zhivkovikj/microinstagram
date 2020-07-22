import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import {HttpClientModule} from '@angular/common/http'
import {RouterModule} from '@angular/router'
import { appRoutes } from './routes'
import {PhotosAppComponent} from './photos-app.component'
import {PhotosListComponent} from './photos/photos-list.component'
import {PhotoUploadComponent} from './photos/photo-upload.component'
import {PhotoThumbnailComponent} from './photos/photo-thumbnail.component'
import { PhotoDetailsComponent } from './photos/photo-details.component'
import { PhotosService } from './photos.service'
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {PhotoEditComponent} from './photos/photo-edit.component'
import { ConfirmationPopoverModule } from 'angular-confirmation-popover'

@NgModule({
  declarations: [
    PhotosAppComponent,
    PhotosListComponent,
    PhotoThumbnailComponent,
    PhotoDetailsComponent,
    PhotoUploadComponent,
    PhotoEditComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    })

  ],
  providers: [
    PhotosService
  ],
  bootstrap:[PhotosAppComponent],
  exports: [RouterModule]
 
})
export class AppModule { }
