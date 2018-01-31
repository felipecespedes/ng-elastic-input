# ng-elastic-input

Angular attribute directive that adjusts the width of a text input while typing.

Based on [angular2-elastic-input](https://github.com/spirosikmd/angular2-elastic-input).

## Installation

To install this library, run:

```bash
$ npm install ng-elastic-input --save
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import ElasticInputModule
import { ElasticInputModule } from 'ng-elastic-input';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify ElasticInputModule as an import
    ElasticInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once `ElasticInputModule` is imported, you can use its directive in your Angular application:

```xml
<input type="text" elastic>
```

You can pass the following properties to the directive:

* [minWidth]
* [maxWidth]
* [delta]

```xml
<input type="text" elastic [minWidth]="100" [maxWidth]="300">
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## Authors

* **Felipe Céspedes** - *felipecespedespisso@gmail.com* - [felipecespedes](https://github.com/felipecespedes)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
