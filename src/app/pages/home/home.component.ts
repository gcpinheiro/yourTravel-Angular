import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';

interface Food {
  value: string;
  viewValue: string;
}

interface Carrier {
  id: number;
  code: string;
  name: string;
  hour: string;
  duracao: string;
  place: string;
  paradas: string;
  value: string;
  type: string;
  imageUrl: string;

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedValue: string;
  selectedCar: string;
  state = false;

  carries: Carrier[] = [
    {
      id: 881, 
      code: 'BA', 
      name: 'British Airways', 
      hour:'13:00-21:00',
      duracao: '10:30' ,
      place: 'GRU-LON',
      paradas: '1 Parada',
      value: 'R$ 10.288,00',
      type: 'Ida e volta',
      imageUrl: 'http://s1.apideeplink.com/images/airlines/BA.png'
    },
    {
      id: 443, 
      code: 'AD', 
      name: 'Azul Linhas Aéreas', 
      hour:'17:30-21:00',
      duracao: '01:05' ,
      place: 'FOR-REC',
      paradas: 'Sem paradas',
      value: 'R$ 688,70',
      type: 'Ida e volta', 
      imageUrl: 'https://s1.apideeplink.com/images/airlines/AD.png'
    },
    {
      id: 443, 
      code: 'JJ', 
      name: 'Latam', 
      hour:'08:17-12:03',
      duracao: '03:05' ,
      place: 'FOR-GRU',
      paradas: 'Sem paradas',
      value: 'R$ 985,62',
      type: 'Ida e volta', 
      imageUrl: 'https://s1.apideeplink.com/images/airlines/JJ.png'
    },
    {
      id: 443, 
      code: 'TP', 
      name: 'TAP', 
      hour:'08:17-12:03',
      duracao: '06:20' ,
      place: 'FOR-LIS',
      paradas: 'Sem paradas',
      value: 'R$ 2.685,62',
      type: 'Ida e volta', 
      imageUrl: 'https://s1.apideeplink.com/images/airlines/TP.png'
    },
    {
      id: 881, 
      code: 'AF', 
      name: 'Air France', 
      hour:'13:00-15:00',
      duracao: '10:30' ,
      place: 'GRU-LON',
      paradas: '1 Parada',
      value: 'R$ 1.288,00',
      type: 'Ida e volta',
      imageUrl: 'http://s1.apideeplink.com/images/airlines/AF.png'
    },
    {
      id: 443, 
      code: 'QR', 
      name: 'Qatar Airways', 
      hour:'17:30-21:00',
      duracao: '01:05' ,
      place: 'FOR-REC',
      paradas: 'Sem paradas',
      value: 'R$ 11.488,70',
      type: 'Ida e volta', 
      imageUrl: 'https://s1.apideeplink.com/images/airlines/QR.png'
    },
    {
      id: 443, 
      code: 'IB', 
      name: 'Ibéria', 
      hour:'08:17-12:03',
      duracao: '10:35' ,
      place: 'GIG-MAD',
      paradas: 'Sem paradas',
      value: 'R$ 4.585,03',
      type: 'Ida e volta', 
      imageUrl: 'https://s1.apideeplink.com/images/airlines/IB.png'
    },
    {
      id: 443, 
      code: 'AZ', 
      name: 'Alitaly', 
      hour:'08:17-12:03',
      duracao: '06:20' ,
      place: 'GRU-FCO',
      paradas: 'Sem paradas',
      value: 'R$ 7.685,81',
      type: 'Ida e volta', 
      imageUrl: 'https://s1.apideeplink.com/images/airlines/AZ.png'
    },

  ];
  

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(private dateAdapter: DateAdapter<Date>) { 
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
  }

  ngOnInit(): void {
  }

  stateBar(){
  	this.state = true;
  }

}
