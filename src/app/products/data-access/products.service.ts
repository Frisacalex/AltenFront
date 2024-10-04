import { Injectable, inject, signal } from "@angular/core";
import { Product } from "./product.model";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: "root"
}) export class ProductsService {

    private readonly http = inject(HttpClient);
    
    private readonly _products = signal<Product[]>([]);

    public readonly products = this._products.asReadonly();

    private itemsPanier : Product [] = [];

    private storageKey = 'itemsPanier';

    constructor () {
        const storedItems = localStorage.getItem(this.storageKey);
        if (storedItems) {
            this.itemsPanier = JSON.parse(storedItems);
        }
    }

    public get(): Observable<Product[]> {
        return this.http.get<Product[]>("/assets/products.json").pipe(
            tap((products) => this._products.set(products))
        );
    }

    addPanier (product : Product) {
        const existItem = this.itemsPanier.find(item => item.id === product.id);
        if (existItem) {
            existItem.quantity +=1;
        } else {
            product.quantity =1;
            this.itemsPanier.push(product);
        }

        localStorage.setItem(this.storageKey, JSON.stringify(this.itemsPanier));
    }

    getPanierCount () : number{
        return this.itemsPanier.length;
    }

    getPanier () : Product[] {
        return this.itemsPanier;
    }

    removeItemPanier (product : Product) : void {
        const index = this.itemsPanier.findIndex(item => item.id === product.id);

        if (index !== -1) {
            this.itemsPanier.splice(index,1);
            localStorage.setItem(this.storageKey, JSON.stringify(this.itemsPanier));
        }
    }
}