import { NgModule } from '@angular/core';

import { CustomersSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [CustomersSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [CustomersSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class CustomersSharedCommonModule {}
