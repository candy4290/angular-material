import { Component, ViewEncapsulation, ReflectiveInjector, Inject } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  mode: any;
  position: any;
  title = 'app';
  darkTheme = false;
  // constructor(private oc: OverlayContainer) {
  //   const injector = ReflectiveInjector.resolveAndCreate([
  //     Person,
  //     {provide: Address, useFactory: () => {
  //       if (environment.production) {
  //         return new Address('北京', '北京', '朝阳区', 'xx街道');
  //       } else {
  //         return new Address('西藏', '拉萨', 'xx 区', 'XX街道');
  //       }
  //     }},
  //     {provide: Id, useFactory: () => {
  //       return Id.getInstance('idcard');
  //     }}
  //   ]);
  //   const childInject = injector.resolveAndCreateChild([Person]);
  //   const person = injector.get(Person);
  //   const personFromChild = childInject.get(Person);
  //   console.log(JSON.stringify(person));
  //   console.log(person === personFromChild);
  // }
  constructor(private oc: OverlayContainer, @Inject('BASE_CONFIG') config: any) {
    console.log(config);
  }
  sidevar(event: any) {
    this.mode = 'over';
    this.position = 'end';
    if (event.opened === true) {
      event.close();
    } else {
      event.open();
    }
  }

  switchTheme(dark: any) {
    this.darkTheme = dark;
  }
}
class Id {
  static getInstance(type: string): Id {
    return new Id();
  }
}
class Address {
  province: string;
  city: string;
  district: string;
  street: string;
  constructor(province: any, city: any, district: any, street: any) {
    this.province = province;
    this.city = city;
    this.district = district;
    this.street = street;
  }
}
class Person {
  id: Id;
  address: Address;
  // constructor() {
  //   this.id = Id.getInstance('idcard');
  //   this.address = new Address('北京', '北京', '朝阳区', 'xx街道');
  // }
  // constructor(id: Id, address: Address) {
  //   this.id = id;
  //   this.address = address;
  // }
  constructor(@Inject(Id) id: Id, @Inject(Address) address: Address) {
    this.id = id;
    this.address = address;
  }
}

// main() {
//   const id = Id.getInstance('idcard');
//   const address = new Address('北京', '北京', '朝阳区', 'xx街道');
//   const person = new Person(id, address);
// }
