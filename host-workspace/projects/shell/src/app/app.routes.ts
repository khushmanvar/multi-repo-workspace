import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "remote",
        loadChildren: () => import("mfe/Module").then(m => m.RemoteModule)
    }
];
