import { SharedModule } from './../shared/shared.module';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { loadSvgResources } from '../utils/svg.util';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import 'rxjs/add/operator/take';
@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SiderbarComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SiderbarComponent
    ],
    providers: [
        {provide: 'BASE_CONFIG', useValue: 'http://localhost:4201'}
    ]
})
export class CoreModule {
    constructor(ir: MatIconRegistry, ds: DomSanitizer) {
        loadSvgResources(ir, ds);
    }
}
