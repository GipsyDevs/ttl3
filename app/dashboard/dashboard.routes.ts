import {Route} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UserComponent} from "./user/user.component";
import {LoginComponent} from "./login/login.component";
import {NotificationsComponent} from "./notifications/notifications.component";
import {TypographyComponent} from "./typography/typography.component";
import {TimeAgoPipe} from "../filters/timeago.filter";
import {SizePipe} from "../filters/size.filter";
import {AuthGuard} from "../services/toleechGuard.service";
import {RegisterComponent} from "./register/register.component";
import {ForgetComponent} from "./forget/forget.component";
import {TorrentComponent} from "./torrents/torrents.component";

export const MODULE_ROUTES: Route[] = [
    {path: 'user', component: UserComponent, canActivate: [AuthGuard]},
    {path: 'torrents', component: TorrentComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'forget', component: ForgetComponent},
    {path: 'forget', component: ForgetComponent},
    {path: 'notifications', component: NotificationsComponent},
    {path: '', redirectTo: 'torrents', pathMatch: 'full'}
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    UserComponent,
    TorrentComponent,
    LoginComponent,
    RegisterComponent,
    ForgetComponent,
    NotificationsComponent,
    TypographyComponent,
    TimeAgoPipe,
    SizePipe

]
