import {Route} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UserComponent} from "./user/user.component";
import {LoginComponent} from "./login/login.component";
import {TableComponent} from "./table/table.component";
import {NotificationsComponent} from "./notifications/notifications.component";
import {TypographyComponent} from "./typography/typography.component";
import {MapsComponent} from "./maps/maps.component";
import {TimeAgoPipe} from "../filters/timeago.filter";
import {SizePipe} from "../filters/size.filter";
import {AuthGuard} from "../services/toleechGuard.service";
import {RegisterComponent} from "./register/register.component";
import {ForgetComponent} from "./forget/forget.component";

export const MODULE_ROUTES: Route[] = [
    {path: 'user', component: UserComponent, canActivate: [AuthGuard]},
    {path: 'table', component: TableComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'forget', component: ForgetComponent},
    {path: 'forget', component: ForgetComponent},
    {path: 'notifications', component: NotificationsComponent},
    {path: '', redirectTo: 'table', pathMatch: 'full'}
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    UserComponent,
    TableComponent,
    LoginComponent,
    RegisterComponent,
    ForgetComponent,
    NotificationsComponent,
    TypographyComponent,
    MapsComponent,
    TimeAgoPipe,
    SizePipe

]
