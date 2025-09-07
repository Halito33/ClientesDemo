import {Component, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhoneFormatPipe } from '../pipes/phoneformat'
import {ApiService} from '../services/api.services';

@Component({
  selector: 'app-root',
  imports: [PhoneFormatPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('ClientesDemo');
  public DatosClientes : any[] = [{name:'Alexander Figueroa',country:'Chile',phone:'+56987654321'},
    {name:'Nicolas Avalos',country:'Argentina',phone:'+56912345678'},
    {name:'Alex Gonzales',country:'España',phone:'+56987654321'}];

  data: any;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    //sin parámetros
    this.apiService.getData('users')
      .subscribe(res => {
        this.data = res;
      });

    //con parámetros
    this.apiService.getDataWithParams('users', { page: 2 })
      .subscribe(res => {
        console.log('Con params:', res);
      });
  }

}
