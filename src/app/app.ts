import { Component} from '@angular/core';
import { Card } from './card/card';

@Component({
  imports: [Card],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App{}
