import { Directive, input } from '@angular/core';

@Directive({
  selector: '[appSafeLink]',
  standalone: true,
  host: {'(click)': 'clickToDo($event)'}
})
export class SafeLinkDirective {
  queryParam = input('myApp')
  
  constructor() {
  }

  clickToDo(event: MouseEvent) {

    const wantToLeave = window.confirm('to you want to leave');
    if(wantToLeave) {
      const address = (event.target as HTMLAnchorElement).href;
        (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam();
        return
    }
    event.preventDefault()
  }
}
