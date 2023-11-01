import { Component } from '@angular/core';
import { Problem } from '../problem';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent {
  problem: Problem = {
    id: 1,
    name: 'coffee',
    description: 'There is no coffee in the morning.'
  }
}
