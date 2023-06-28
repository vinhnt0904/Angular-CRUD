import { Injectable } from '@angular/core';
import { Tours } from './tours';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  constructor() {}
  tour: Tours[] = [
    {
      id: 1,
      name: 'TOUR DU LỊCH: Sầm Sơn',
      img: '../assets/img/Ha_Long.jpg',
      desc: 'Đây là tour du lịch đẹp nhất, hay nhất mà các bạn đừng quên bỏ lỡ nhé !',
      price: 200000
    },
    {
      id: 2,
      name: 'TOUR DU LỊCH: Binh Thuan',
      img: '../assets/img/du-lich-phong-nha-ke-bang.jpg',
      desc: 'Đây là tour du lịch đẹp nhất, hay nhất mà các bạn đừng quên bỏ lỡ nhé !',
      price: 200000
    },
    {
      id: 3,
      name: 'TOUR DU LỊCH: Ha Long',
      img: '../assets/img/Japan.jpg',
      desc: 'Đây là tour du lịch đẹp nhất, hay nhất mà các bạn đừng quên bỏ lỡ nhé !',
      price: 200000
    },
    {
      id: 4,
      name: 'TOUR DU LỊCH: TP HCM',
      img: '../assets/img/vuon-quoc-gia-phong-nha-ke-bang-thuoc-tinh-nao.jpg',
      desc: 'Đây là tour du lịch đẹp nhất, hay nhất mà các bạn đừng quên bỏ lỡ nhé !',
      price: 200000
    },
  

  ]

  getAllProduct(): Tours[] {
    return this.tour
  }
  
}
