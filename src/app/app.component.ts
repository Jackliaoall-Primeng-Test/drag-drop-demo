import { Component } from '@angular/core';

export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  availableProducts: Product[];

  selectedProducts1: Product[];
  selectedProducts2: Product[];

  draggedProduct: Product;

  constructor() { }

  ngOnInit() {
      this.selectedProducts1 = [];
      this.selectedProducts2 = [];
      // this.productService.getProductsSmall().then(products => this.availableProducts = products);

      this.availableProducts =
      [
        {
          "id": "1000",
          "code": "f230fh0g3",
          "name": "Bamboo Watch",
          "description": "Product Description",
          "image": "bamboo-watch.jpg",
          "price": 65,
          "category": "Accessories",
          "quantity": 24,
          "inventoryStatus": "INSTOCK",
          "rating": 5
        },
        {
          "id": "1001",
          "code": "nvklal433",
          "name": "Black Watch",
          "description": "Product Description",
          "image": "black-watch.jpg",
          "price": 72,
          "category": "Accessories",
          "quantity": 61,
          "inventoryStatus": "INSTOCK",
          "rating": 4
        },
        {
          "id": "1002",
          "code": "zz21cz3c1",
          "name": "Blue Band",
          "description": "Product Description",
          "image": "blue-band.jpg",
          "price": 79,
          "category": "Fitness",
          "quantity": 2,
          "inventoryStatus": "LOWSTOCK",
          "rating": 3
        },
        {
          "id": "1003",
          "code": "244wgerg2",
          "name": "Blue T-Shirt",
          "description": "Product Description",
          "image": "blue-t-shirt.jpg",
          "price": 29,
          "category": "Clothing",
          "quantity": 25,
          "inventoryStatus": "INSTOCK",
          "rating": 5
        },
        {
          "id": "1004",
          "code": "h456wer53",
          "name": "Bracelet",
          "description": "Product Description",
          "image": "bracelet.jpg",
          "price": 15,
          "category": "Accessories",
          "quantity": 73,
          "inventoryStatus": "INSTOCK",
          "rating": 4
        },
        {
          "id": "1005",
          "code": "av2231fwg",
          "name": "Brown Purse",
          "description": "Product Description",
          "image": "brown-purse.jpg",
          "price": 120,
          "category": "Accessories",
          "quantity": 0,
          "inventoryStatus": "OUTOFSTOCK",
          "rating": 4
        },
        {
          "id": "1006",
          "code": "bib36pfvm",
          "name": "Chakra Bracelet",
          "description": "Product Description",
          "image": "chakra-bracelet.jpg",
          "price": 32,
          "category": "Accessories",
          "quantity": 5,
          "inventoryStatus": "LOWSTOCK",
          "rating": 3
        },
        {
          "id": "1007",
          "code": "mbvjkgip5",
          "name": "Galaxy Earrings",
          "description": "Product Description",
          "image": "galaxy-earrings.jpg",
          "price": 34,
          "category": "Accessories",
          "quantity": 23,
          "inventoryStatus": "INSTOCK",
          "rating": 5
        },
        {
          "id": "1008",
          "code": "vbb124btr",
          "name": "Game Controller",
          "description": "Product Description",
          "image": "game-controller.jpg",
          "price": 99,
          "category": "Electronics",
          "quantity": 2,
          "inventoryStatus": "LOWSTOCK",
          "rating": 4
        },
        {
          "id": "1009",
          "code": "cm230f032",
          "name": "Gaming Set",
          "description": "Product Description",
          "image": "gaming-set.jpg",
          "price": 299,
          "category": "Electronics",
          "quantity": 63,
          "inventoryStatus": "INSTOCK",
          "rating": 3
        }
      ];
  }

  dragStart(product: Product): void {
      this.draggedProduct = product;
  }

  drop1(event): void {
      if (this.draggedProduct) {
          const draggedProductIndex = this.findIndex(this.draggedProduct);
          this.selectedProducts1 = [...this.selectedProducts1, this.draggedProduct];
          this.availableProducts = this.availableProducts.filter((val, i) => i != draggedProductIndex);
          this.draggedProduct = null;
      }
  }

  drop2(event): void {
    if (this.draggedProduct) {
      const draggedProductIndex = this.findIndex(this.draggedProduct);
      this.selectedProducts2 = [...this.selectedProducts2, this.draggedProduct];
      this.availableProducts = this.availableProducts.filter((val, i) => i != draggedProductIndex);
      this.draggedProduct = null;
    }
  }

  dragEnd(event): void {
      this.draggedProduct = null;
  }

  findIndex(product: Product): number {
      let index = -1;
      for (let i = 0; i < this.availableProducts.length; i++) {
          if (product.id === this.availableProducts[i].id) {
              index = i;
              break;
          }
      }
      return index;
  }

  onClick(product: Product): void {
    this.selectedProducts1 = this.selectedProducts1.filter((x) => x.id !== product.id);
    this.selectedProducts2 = this.selectedProducts2.filter((x) => x.id !== product.id);
  }
}
