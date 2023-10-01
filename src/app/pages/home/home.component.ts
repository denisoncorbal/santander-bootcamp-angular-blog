import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/interfaces/data';
import { FakeDataService } from 'src/app/services/fake-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bigCardItem: Data = {
    id: '',
    title: '',
    description: '',
    photoCover: '',
    postDate: new Date()
  };

  smallCardItems: Data[]=[];

  constructor(private fakeData: FakeDataService) { }

  ngOnInit(): void {
    this.smallCardItems = this.fakeData.getAllData().sort((a, b)=>b.postDate.getTime()-a.postDate.getTime()).slice(1,4);
    this.bigCardItem = this.fakeData.getAllData().sort((a, b)=>b.postDate.getTime()-a.postDate.getTime())[0];
  }

}