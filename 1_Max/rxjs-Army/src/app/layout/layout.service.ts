import { Routes, Route  } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component"

export class layout{
    static childRoutes(routes:Routes){
        return {
            path: '',
            component: LayoutComponent,
            children: routes,
        };
    }
}