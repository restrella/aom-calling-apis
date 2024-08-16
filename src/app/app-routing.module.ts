import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { BookResolver } from './resolvers/book.resolver';

const routes: Routes = [
  {
    path: '',
    component: FirstComponent,
  },
  {
    // path: 'second/:id',
    // path: 'second/:id/:name/:age',
    path: 'second',
    component: SecondComponent,
    children: [
      {
        path: 'firstChild',
        component: FirstChildComponent,
      },
      {
        path: 'secondChild',
        component: SecondChildComponent,
      },
    ],
  },
  {
    path: 'third',
    component: ThirdComponent,
    resolve: {
      books: BookResolver,
    },
  },
  {
    path: 'fourth',
    loadChildren: () => import('./lazy/lazy.module').then((m) => m.LazyModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
