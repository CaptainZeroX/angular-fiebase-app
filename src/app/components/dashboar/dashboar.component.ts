import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-dashboar',
  templateUrl: './dashboar.component.html',
  styleUrls: ['./dashboar.component.scss']
})



export class DashboarComponent implements OnInit {

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}


}
