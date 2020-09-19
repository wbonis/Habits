// DEPENDENCIES
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// SECURITY
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },

    /* START MY VIEWS */

    { path: 'habitses/:id', loadChildren: './pages/habits-edit/habits-edit.module#HabitsEditModule', canActivate: [AuthGuard] },
    { path: 'habitses', loadChildren: './pages/habits-list/habits-list.module#HabitsListModule', canActivate: [AuthGuard] },
    { path: 'home', loadChildren: './pages/home/home.module#HomeModule', canActivate: [AuthGuard] },

 /* END MY VIEWS */

    // SECURITY
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule' }
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
