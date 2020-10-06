import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './../services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  offset = 0;
  user = [];

  constructor(private dataService: DatabaseService) {}

  ngOnInit(){
    this.loadUser();
  }

  loadUser() {
    this.dataService.getUser(this.offset).subscribe(res => {
      console.log('result: ', res);
      this.user = res;
    })
  }

}
