import { Component, OnInit, inject } from "@angular/core";
import { Product } from "app/products/data-access/product.model";
import { ProductsService } from "app/products/data-access/products.service";
import { CardModule } from "primeng/card";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: "app-panier",
  templateUrl: "./panier.component.html",
  styleUrls: ["./panier.component.scss"],
  standalone: true,
  imports: [ CardModule, ButtonModule],
})
export class PanierComponent implements OnInit {
  private readonly productsService = inject(ProductsService);

  public readonly products = this.productsService.products;

  panier!: Product[] 
  product!: Product

  ngOnInit() {
    this.productsService.get().subscribe();
  }

  addPanier(product : Product) {
    this.panier.push(product)
  }
}
