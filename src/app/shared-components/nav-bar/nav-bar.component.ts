import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  currentPage : string;

  constructor() { }

  ngOnInit() {
  }

  setCurrentPage(newPage:string){
    console.log("Setting page: "+newPage)
    this.currentPage = newPage;
  }

}
