import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FeaturesPageComponent } from './features-page/features-page.component';
import { PricingPageComponent } from './pricing-page/pricing-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  {
    title:"Home Page | MarjellaPets",
    path: '',
    component: HomePageComponent
  },
  {
    title: 'Features | MarjellaPets',
    path: 'features',
    component: FeaturesPageComponent
  },
  {
    title: 'Pricing | MarjellaPets',
    path: 'Pricing',
    component: PricingPageComponent
  },
  {
    title: 'Contact us | MarjellaPets',
    path: 'Contact',
    component: ContactPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
