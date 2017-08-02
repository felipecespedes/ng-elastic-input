import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElasticInputDirective } from './elastic-input.directive';

export * from './elastic-input.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ElasticInputDirective
  ],
  exports: [
    ElasticInputDirective
  ]
})
export class ElasticInputModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ElasticInputModule,
      providers: []
    };
  }
}
