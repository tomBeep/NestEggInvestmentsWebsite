import {Component, Input, OnInit} from '@angular/core';
import {RequiredProperty} from "../../../../shared-components/decorators";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  subtitle: string;

  @Input()
  description: string;//HTML string

  @Input()
  fee: string;

  @Input()
  customFee: string;//HTML string

  constructor() { }

  ngOnInit(): void {
  }

}
