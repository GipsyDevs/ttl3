import {Route} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UserComponent} from "./user/user.component";
import {IconsComponent} from "./icons/icons.component";
import {TableComponent} from "./table/table.component";
import {NotificationsComponent} from "./notifications/notifications.component";
import {TypographyComponent} from "./typography/typography.component";
import {MapsComponent} from "./maps/maps.component";
import {TimeAgoPipe} from "../filters/timeago.filter";
import {SizePipe} from "../filters/size.filter";

export const MODULE_ROUTES: Route[] = [
    // { path: 'dashboard', component: HomeComponent },
    {path: 'user', component: UserComponent},
    {path: 'table', component: TableComponent},
    // { path: 'icons', component: IconsComponent },
    {path: 'notifications', component: NotificationsComponent},
    // { path: 'typography', component: TypographyComponent },
    // { path: 'maps', component: MapsComponent },
    {path: '', redirectTo: 'table', pathMatch: 'full'}
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    UserComponent,
    TableComponent,
    IconsComponent,
    NotificationsComponent,
    TypographyComponent,
    MapsComponent,
    TimeAgoPipe,
    SizePipe
]
