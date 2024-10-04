import { Component, OnInit, inject } from "@angular/core";
import { Product } from "app/products/data-access/product.model";
import { ProductsService } from "app/products/data-access/products.service";
import { CardModule } from "primeng/card";
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-panier",
  templateUrl: "./panier.component.html",
  styleUrls: ["./panier.component.scss"],
  standalone: true,
  imports: [ CardModule, ButtonModule, TableModule, CommonModule, RouterModule],
})
export class PanierComponent implements OnInit {

  itemPanier : Product[] = [];
  prixTotal : Number = 0;
  produitTotal : Number = 0;

  constructor (private ProductsService : ProductsService) {}

  ngOnInit() {
    this.itemPanier = this.ProductsService.getPanier();
    this.getMontant();
  }

  getMontant () {
    this.prixTotal = this.itemPanier.reduce((total,item) => total + (item.price * item.quantity), 0);
    this.produitTotal = this.itemPanier.reduce((total,item) => total + (item.quantity), 0);
  }

  removeProduct (product : Product) : void {
    this.ProductsService.removeItemPanier(product);
    this.getMontant();
  }

}
