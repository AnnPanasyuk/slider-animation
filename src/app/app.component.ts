import {Component, OnInit} from '@angular/core';

interface IRegisterSlideInterface {
  icon: string;
  caption: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public stateOfAnimation = false;
  public viewSlides: IRegisterSlideInterface[] = [
    {
      icon: 'assets/images/slider_icons-1.svg',
      caption: 'Find new partners and friends',
    },
    {
      icon: 'assets/images/slider_icons-2.svg',
      caption: 'Share your thoughts',
    },
    {
      icon: 'assets/images/slider_icons-3.svg',
      caption: 'Create and join communities',
    },
    {
      icon: 'assets/images/slider_icons-4.svg',
      caption: 'Use the most user-friendly interface',
    },
  ];

  private movingSlide: IRegisterSlideInterface = null;

  constructor() { }

  public ngOnInit(): void {
    setInterval(
      () => {
        this.nextSlide();
      },
      3000,
    );
  }

  public nextSlide(): void {
    this.movingSlide = this.viewSlides.shift();
    this.viewSlides.push(this.movingSlide);
    this.stateOfAnimation = true;
    setTimeout(
      () => {
        this.stateOfAnimation = false;
      },
      1500,
    );
  }
}
