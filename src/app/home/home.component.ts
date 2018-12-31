import { Component, OnInit } from '@angular/core';
import { ItemEventData } from "tns-core-modules/ui/list-view"
@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  textFieldValue: string = "";
  title = 'angular-nativescript-project';
  
onItemTap(args: ItemEventData): void {
    console.log('Item with index: ' + args.index + ' tapped');
}

constructor() {
}

ngOnInit(): void {
}
}
