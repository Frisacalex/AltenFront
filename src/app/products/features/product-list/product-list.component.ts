import { Component, OnInit, inject } from "@angular/core";
import { Product } from "app/products/data-access/product.model";
import { ProductsService } from "app/products/data-access/products.service";
import { CardModule } from "primeng/card";
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
  standalone: true,
  imports: [DataViewModule, CardModule, ButtonModule],
})
export class ProductListComponent implements OnInit {
  private readonly productsService = inject(ProductsService);

  public readonly products = this.productsService.products;

  panier: Product[]=[]
  product!: Product

  ngOnInit() {
    this.productsService.get().subscribe();
  }

  addPanier(id:Product) {
    console.log(id)
    this.panier.push(id)
    console.log(this.panier)
  }
}
