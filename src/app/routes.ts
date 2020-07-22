import { Routes } from '@angular/router'
import { PhotosListComponent } from './photos/photos-list.component'
import { PhotoDetailsComponent } from './photos/photo-details.component'
import { PhotoUploadComponent } from './photos/photo-upload.component'
import { PhotoEditComponent } from './photos/photo-edit.component'

export const appRoutes:Routes = [
    {path: 'photos', pathMatch: 'full', component: PhotosListComponent},
    {path: 'photos/edit/:id', component: PhotoEditComponent},
    {path: 'photos/upload', component: PhotoUploadComponent},
    {path: 'photos/:id', component: PhotoDetailsComponent},
    {path: '', redirectTo: '/photos', pathMatch: 'full'},




]