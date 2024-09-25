import { Routes } from '@angular/router';
import { ParkingListComponent } from './components/parking-list/parking-list.component';
import { ParkingDetailComponent } from './components/parking-detail/parking-detail.component';

export const routes: Routes = [

    {path:'', redirectTo:'/parking-list', pathMatch: 'full'},
    {path:'parking-list', component:ParkingListComponent},
    {path:'parking-detail', component:ParkingDetailComponent}
];
