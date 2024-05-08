import { Component } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons'; 
import { faLocation } from '@fortawesome/free-solid-svg-icons'; 
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faTv } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  faHome = faHome;
  faLocation = faLocation;
  faPeopleGroup = faPeopleGroup;
  faTv = faTv;
}
