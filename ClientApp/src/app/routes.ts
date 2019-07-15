import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { BikeListComponent } from './bike-list/bike-list.component';
import { PostAddComponent } from './post-add/post-add.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { User_postComponent } from './user_post/user_post.component';

export const appRoutes: Routes = [
    {path: '' , component:BikeListComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],//CanActive когда переход на , CanDeactive - когда уход с 
        children: [
            {path: 'post-add' , component: PostAddComponent},
            {path: 'profile' , component: ProfileComponent},
            {path: 'userpost' , component: User_postComponent}
        ]
    },
    {path:'home',component:HomeComponent},
    {path:'bikelist',component:BikeListComponent},
    {path: '**' , redirectTo: '',pathMatch: "full"}
    //pathMath-full , адрес должен соответстовать полностью , т.е home/2 не пойдеть должен быть home
]