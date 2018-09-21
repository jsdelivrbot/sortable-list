import { Component, OnInit, ViewChild } from '@angular/core';
import { VERSION, MatMenuTrigger } from '@angular/material';
import { moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent implements OnInit {

  version = VERSION;

  data = [{
    'name': 'George Washington',
    'details': '1789'
  },
  {
    'name': 'John Adams',
    'details': '1796'
  },
  { 'name': 'Thomas Jefferson', 'details': '1800' },
  { 'name': 'James Madison', 'details': '1808' },
  { 'name': 'James Monroe', 'details': '1812' }
  ];
  item: any = "";
  draggable: boolean = false;

  displayedColumns: string[] = ['name', 'details'];
  dataSource: any;

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
  }
  edit() {
    this.draggable = !this.draggable;
    console.log(this.draggable);
  }

  ngOnInit(): void {

  }
  onOpenMenu(menu: any): void {
    console.log(menu);
  }
  onSelected(item: any) {
    console.log(item);
    this.item = item;
  }
  isSelected(item: any) {
    return this.item === item;
  }
}
