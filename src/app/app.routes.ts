import { Routes } from "@angular/router";
import { HomeComponent } from "./shared/features/home/home.component";
import { PanierComponent } from "./products/panier/panier.component";
import { ContactComponent } from "./shared/contact/contact.component";

export const APP_ROUTES: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "products",
    loadChildren: () =>
      import("./products/products.routes").then((m) => m.PRODUCTS_ROUTES)
  },
  {
    path: "panier",
    component : PanierComponent
  },
  {
    path: "contact",
    component : ContactComponent
  },
  { path: "", redirectTo: "home", pathMatch: "full" },
];
