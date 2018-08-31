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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.phoneService.addPhone({ name } as Phone)
      .subscribe(phone => {
        this.phones.push(phone);
      });
  }

  delete(phone: Phone): void {
    this.phones = this.phones.filter(h => h !== phone);
    this.phoneService.deletePhone(phone).subscribe();
  }
}
