import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailsGuard } from './product-guard.service';
import { ProductDetailComponent } from './product-detail.component';
import { ProductFilterPipe } from './product-filter.pipe';

import { ProductService } from './product.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [ProductListComponent, ProductFilterPipe,
        ProductDetailComponent],
    imports: [
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            {
                path: 'products/:id',
                canActivate: [ProductDetailsGuard],
                component: ProductDetailComponent
            }
        ]),
        SharedModule],
    providers: [ProductService, ProductDetailsGuard]
})
export class ProductModule { }