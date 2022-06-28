import { Component } from '@angular/core';
import { Menu } from '../../model/Menus';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  menuLogin: string = "Sign In";
  loginImg: string = "../../../assets/images/mountain.jpg";
  home: string = "Home";
  services: string;
  reports: string = "Reports";
  servicesDropdown: string[] = ["e-Challan", "Check Status", "Make payment", "Downloads", "Bookings"];
  google: string = "https://www.google.com";
  menus: Menu[] = [];
  searchData: string = "xyz";
  object: any = {
    a: 12,
    b: 13,
    c:14
  }

  constructor() { 
    this.services = "Services";
  }

  getMenus() {
    return this.menus;
  }
  onLoginClicked(event: Event) {
    alert("Login is not allowed!!!");
  }
  search() {
    console.log(this.searchData);
  }
  
}

/*** Binding (Linking - Establishing link between .ts {cmoponent} and the .html file <template>)
 * Sharing/exchange of the data between component and template
 * 1. Text interpolation  -- Binding a text to html tag. Done by {{}}
 * 2. Properties binding -- Binding of the attributes of HTML tag
 * 3. Event Binding -- Binding of event to html element
 * 4. two-way binding --Binding of data and event together for two way flow of data
 */