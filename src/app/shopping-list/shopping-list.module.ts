import { NgModule } from "@angular/core";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            { path: 'shopping-list', component: ShoppingListComponent }
        ]),
        SharedModule
    ],
    exports: [
        RouterModule
    ]
})
export class ShoppingListModule {

}