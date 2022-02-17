import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]' 
})// pode restringir para a onde o deretiva pode ser usada  só coloca p de paragrafo o b de botton
export class FundoAmareloDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
    ) { 
    //console.log(this._elementRef);
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    //console.log(this._elementRef);
//this._elementRef.nativeElement.style.backgroundColor = 'yellow';
this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
  }

}
