import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FakeDataService } from 'src/app/services/fake-data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  constructor(private fakeData: FakeDataService){}

  onSubmit(f: NgForm){    
    const id = (this.fakeData.getAllData().length + 1).toString();
    const title = f.value.title;
    const photoCover = f.value.photoCover;
    const description = f.value.description;
    const postDate = new Date();

    this.fakeData.addData({id, title, photoCover, description, postDate});
  }

}
