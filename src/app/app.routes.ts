import { Routes } from '@angular/router';
import { MainPage } from './components/main-page/main-page';
import { Contact } from './components/contact/contact/contact';

export const routes: Routes = [
    { path:'', component: MainPage },
    { path:'contact', component: Contact}
];

