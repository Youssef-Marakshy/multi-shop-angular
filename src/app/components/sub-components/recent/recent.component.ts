import { Component, OnInit } from '@angular/core';
import { ShopProduct } from './../../../interfaces/product';
import {
  RecentService
} from 'src/app/services/recent.service';
@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnInit {
  recentProducts: Array < ShopProduct > = [];
  constructor(private RecentService: RecentService) {}

  ngOnInit(): void {
    this.recentProducts = this.RecentService.getRecentProducts();
  }
}
