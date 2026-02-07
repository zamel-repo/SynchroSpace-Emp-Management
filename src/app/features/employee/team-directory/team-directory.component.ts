import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxGraphModule, Node, Edge, NgxGraphZoomOptions } from '@swimlane/ngx-graph';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as d3Shape from 'd3-shape';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-team-directory',
  standalone: true,
  imports: [CommonModule, NgxGraphModule, MatIconModule, MatTooltipModule],
  templateUrl: './team-directory.component.html',
  styleUrls: ['./team-directory.component.scss']
})
export class TeamDirectoryComponent {
  public curve = d3Shape.curveBundle.beta(1);

  zoomToFit$: Subject<NgxGraphZoomOptions> = new Subject();
  center$: Subject<boolean> = new Subject();
  update$: Subject<boolean> = new Subject();

  layoutSettings = {
    orientation: 'TB'
  };

  nodes: Node[] = [
    { id: '1', label: 'Mustafa Bakri', data: { role: 'Head of IT Department', status: 'online', type: 'manager' } },
    { id: '2', label: 'Samer Jalal', data: { role: 'AI Lead', team: 'AI & Data Team', status: 'meeting', type: 'lead' } },
    { id: '3', label: 'Hana Salem', data: { role: 'Security Lead', team: 'Cyber Team', status: 'online', type: 'lead' } },
    { id: '4', label: 'Omar Al-Fahad', data: { role: 'Senior AI Engineer', status: 'online', type: 'senior' } },
    { id: '5', label: 'Lina Murad', data: { role: 'Data Scientist', status: 'away', type: 'employee' } },
    { id: '6', label: 'Ahmed Hassan', data: { role: 'Security Analyst', status: 'online', type: 'employee' } }
  ];

  links: Edge[] = [
    { id: 'e1', source: '1', target: '2' },
    { id: 'e2', source: '1', target: '3' },
    { id: 'e3', source: '2', target: '4' },
    { id: 'e4', source: '2', target: '5' },
    { id: 'e5', source: '3', target: '6' }
  ];

  fitToScreen() {
    this.zoomToFit$.next({ autoCenter: true });
  }

  centerGraph() {
    this.center$.next(true);
  }
}