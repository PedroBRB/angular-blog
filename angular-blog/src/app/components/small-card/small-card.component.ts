import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {

  @Input()
  photoCover: string = "https://image.api.playstation.com/vulcan/img/rnd/202010/2716/LQm890FA1pIAEoiU7HJQm1S5.png"
  @Input()
  cardTitle: string = "NOVA SERIE ANUNCIADA"

}
