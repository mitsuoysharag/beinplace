import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products = [
    {
      name: 'Pantalón paquito',
      price: 25,
      img: 'https://5.imimg.com/data5/EB/NJ/MY-41978111/mens-jeans-500x500.jpg'
    },
    {
      name: 'Pantalón paquito',
      price: 27,
      img: 'https://5.imimg.com/data5/EB/NJ/MY-41978111/mens-jeans-500x500.jpg'
    },
    {
      name: 'Pantalón paquito',
      price: 26,
      price2: 30,
      img: 'https://5.imimg.com/data5/EB/NJ/MY-41978111/mens-jeans-500x500.jpg'
    },
    {
      name: 'Pantalón paquito',
      price: 22,
      price2: 30,
      img: 'https://5.imimg.com/data5/EB/NJ/MY-41978111/mens-jeans-500x500.jpg'
    },
    {
      name: 'Pantalón paquito',
      price: 35,
      img: 'https://5.imimg.com/data5/EB/NJ/MY-41978111/mens-jeans-500x500.jpg'
    },
    {
      name: 'Pantalón paquito',
      price: 35,
      price2: 38,
      img: 'https://5.imimg.com/data5/EB/NJ/MY-41978111/mens-jeans-500x500.jpg'
    },
    {
      name: 'Pantalón paquito',
      price: 35,
      price2: 38,
      img: 'https://5.imimg.com/data5/EB/NJ/MY-41978111/mens-jeans-500x500.jpg'
    }
  ]
  services = [
    {
      name: 'Envío Seguro',
      icon: 'truck'
    },
    {
      name: 'Productos de Calidad',
      icon: 'tshirt'
    },
    {
      name: 'Rápida Respuesta',
      icon: 'comments'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
