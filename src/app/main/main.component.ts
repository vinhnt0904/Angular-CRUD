import { Component, OnInit } from '@angular/core';
import { Tours } from '../tours';
import { ToursService } from '../tours.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  listTours : Tours[] = [];
  constructor ( private t: ToursService ) {}
    ngOnInit(): void {
      this.listTours = this.t.getAllProduct();
    }
}
