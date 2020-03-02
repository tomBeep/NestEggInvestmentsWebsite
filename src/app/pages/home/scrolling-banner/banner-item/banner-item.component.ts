import {Component, Input} from '@angular/core';
import {RequiredProperty} from "../../../../shared-components/decorators";

@Component({
  selector: 'app-banner-item',
  templateUrl: './banner-item.component.html',
  styleUrls: ['./banner-item.component.css']
})

export class BannerItemComponent {

  @Input()
  title: string;

  @Input()
  description: string;

  @RequiredProperty
  @Input()
  image: string;

  constructor() {
  }


}
