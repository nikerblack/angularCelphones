import { Component, OnInit } from '@angular/core';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {

  phones: Phone[]; 

  constructor(private phoneService: PhoneService) { }

  ngOnInit() {
    this.getPhones();
  }

  getPhones(): void{
    this.phoneService.getPhones()
        .subscribe(phones => this.phones = phones);
  }
}
