import {
  Component,
} from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { SplitterModule } from 'primeng/splitter';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelMenuComponent } from "./shared/ui/panel-menu/panel-menu.component";
import { BadgeModule } from 'primeng/badge';
import { Product } from "app/products/data-access/product.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [RouterModule, SplitterModule, ToolbarModule , PanelMenuComponent,BadgeModule],
})
export class AppComponent {
  constructor(private router: Router) {}
  title = "ALTEN SHOP";
  panier: Product[]= []

  versPanier() {
    this.router.navigateByUrl("panier");
  }
}

