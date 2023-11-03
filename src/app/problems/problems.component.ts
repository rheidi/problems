import { Component } from '@angular/core';
import { Problem } from '../problem';
import { PROBLEMS } from '../mock-problems';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent {
  problems = PROBLEMS;
}
