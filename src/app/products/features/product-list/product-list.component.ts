import { Component, OnInit, inject } from "@angular/core";
import { Product } from "app/products/data-access/product.model";
import { ProductsService } from "app/products/data-access/products.service";
import { CardModule } from "primeng/card";
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { SelectItem } from "primeng/api";
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
  standalone: true,
  imports: [DataViewModule, CardModule, ButtonModule, CommonModule, DropdownModule, FormsModule],
})
export class ProductListComponent implements OnInit {
  private readonly productsService = inject(ProductsService);

  public readonly products = this.productsService.products;

  panier: Product[]=[];
  product!: Product;
  sortOptions!: SelectItem[];
  sortOrder!: number;
  sortField!: string;
  sortKey!:string;
  listCategory!: SelectItem[];
  selectedCategory!:any;

  ngOnInit() {
    this.productsService.get().subscribe();
    this.sortOptions = [
      { label: 'Prix décroissant', value: '!price' },
      { label: 'Prix croissant', value: 'price' }
    ];
    this.listCategory = [
      { label: "Accessories", value: "Accessories" },
      { label: "Fitness", value: "Fitness" },
      { label: "Clothing", value: "Clothing" },
      { label: "Electronics", value: "Electronics" }
    ];
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    } else {
        this.sortOrder = 1;
        this.sortField = value;
    }
  }

  addPanier(product:Product) : void {
    this.productsService.addPanier(product);
  }
}
