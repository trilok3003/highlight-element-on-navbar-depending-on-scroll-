import { Component, VERSION, HostListener } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  // @HostListener('window:scroll', ['$event'])
  // scrollHandler(event) {
  //   console.log('Scroll Event');
  //   // console.log(event);
  //   const verticalOffset =
  //     window.pageYOffset ||
  //     document.documentElement.scrollTop ||
  //     document.body.scrollTop ||
  //     0;
  //   console.log(verticalOffset);
  // }
  scrollToElement(el: HTMLElement) {
    el.scrollIntoView({behavior:"smooth"});
  }
}
