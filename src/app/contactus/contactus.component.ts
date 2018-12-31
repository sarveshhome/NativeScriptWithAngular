import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  title = 'Conatact us page ';
  constructor() { }

  ngOnInit() {
  }

}
