import {​​​​​​​​ Pipe }​​​​​​​​ from '@angular/core';
import {​​​​​​​​PipeTransform}​​​​​​​​ from '@angular/core';
@Pipe({​​​​​​​​
name: 'Productsearchpipe'// name of the pipe
}​​​​​​​​)
export class Productsearchpipe implements PipeTransform {​​​​​​​​
transform(products: any, searchText: any){​​​​​​​​
if (searchText)
return products.filter(x => x.ProductName.toLowerCase().startsWith(searchText.toLowerCase()));

return products;
    }​​​​​​​​

    }​​​​​​​​

