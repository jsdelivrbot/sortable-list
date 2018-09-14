import { Component, OnInit, ViewChild } from '@angular/core';
import { VERSION, MatMenuTrigger } from '@angular/material';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {

  version = VERSION;

  data: any[] = [];
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

  createItem(index: number) {
    return { id: index, name: `Item ${index}`, details: `item ${index} details` };
  }
  createRandomItem() {
    const int: number = parseInt((Math.random() * 100) + '', 10);
    return this.createItem(int);
  }
  updateTable() {
    this.dataSource = JSON.parse(JSON.stringify(this.data));
  }
  ngOnInit(): void {
    for (let i = 1; i <= 10; i++) {
      this.data.push(this.createRandomItem());
    }
    this.updateTable();
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
  onAddItem() {
    this.data.push(this.createRandomItem());
    this.updateTable();
  }
  onRemoveItem(item: any) {
    this.data.splice(this.data.indexOf(item), 1);
    this.updateTable();
  }
  onRemoveAll() {
    this.data = [];
    this.updateTable();
  }
}