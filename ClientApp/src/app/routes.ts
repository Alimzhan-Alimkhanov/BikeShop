import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { BikeListComponent } from './bike-list/bike-list.component';

export const appRoutes: Routes = [
    {path: '' , component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],//CanActive когда переход на , CanDeactive - когда уход с 
        children: [
            {path: 'members' , component: MemberListComponent},
            {path: 'messages' , component: MessagesComponent},
            {path: 'lists' , component: ListsComponent}  
        ]
    },
     
    {path:'bikelist',component:BikeListComponent},
    {path: '**' , redirectTo: '',pathMatch: "full"}
    //pathMath-full , адрес должен соответстовать полностью , т.е home/2 не пойдеть должен быть home
]