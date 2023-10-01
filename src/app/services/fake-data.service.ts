import { Injectable } from '@angular/core';
import { dataFake } from '../data/dataFake';
import { Data } from '../interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class FakeDataService {

  private data = dataFake;

  constructor() { }

  getData(id: string): Data{
    return this.data.filter(dt => dt.id == id)[0];
  }

  getAllData():Data[]{
    return this.data;
  }

  addData(newData: Data){
    this.data.push(newData);
  }
}
