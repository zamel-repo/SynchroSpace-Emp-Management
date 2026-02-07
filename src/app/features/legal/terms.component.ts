import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="min-h-screen bg-[#fafafa] font-sans text-[#1a1a1a] flex flex-col">
      <header class="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between shadow-sm sticky top-0 z-50">
        <div class="flex items-center gap-2 cursor-pointer" (click)="goBack()">
          <div class="w-7 h-7 bg-[#0067b8] flex items-center justify-center rounded-sm">
            <mat-icon class="text-white !text-lg flex items-center justify-center">sync</mat-icon>
          </div>
          <span class="text-lg font-bold tracking-tight text-gray-800">SynchroSpace</span>
        </div>
        <button (click)="goBack()" class="text-sm font-medium text-[#0067b8] hover:underline">Back to Sign in</button>
      </header>

      <main class="flex-grow max-w-4xl mx-auto w-full py-12 px-6">
        <h1 class="text-4xl font-semibold mb-2 text-gray-900">Terms of Use</h1>
        <p class="text-gray-500 mb-10 italic text-sm font-mono">Effective Date: January 02, 2026</p>

        <div class="space-y-10 bg-white p-10 shadow-[0_2px_4px_rgba(0,0,0,0.05)] border border-gray-200 rounded-sm">
          <section>
            <h2 class="text-xl font-bold mb-4 text-gray-800">1. Legal Agreement</h2>
            <p class="text-gray-600 leading-relaxed">By accessing the SynchroSpace platform, you acknowledge that you are an authorized employee or contractor of your organization. Unauthorized access is a breach of corporate policy.</p>
          </section>

          <section>
            <h2 class="text-xl font-bold mb-4 text-gray-800">2. Virtual Workspace Simulation</h2>
            <p class="text-gray-600 leading-relaxed">The 2D simulation is a real-time representation of the physical/remote office. Users must maintain professional behavior through their digital avatars and communication modules.</p>
          </section>

          <section>
            <h2 class="text-xl font-bold mb-4 text-gray-800">3. Performance Monitoring</h2>
            <p class="text-gray-600 leading-relaxed">SynchroSpace tracks operational metrics and virtual presence. This data is protected and used solely for organizational efficiency and collaborative synchronization.</p>
          </section>
        </div>
      </main>

      <footer class="p-8 border-t border-gray-200 text-center text-[11px] text-gray-400 font-medium">
        © 2026 SynchroSpace Platform. All rights reserved.
      </footer>
    </div>
  `,
  styles: [`
    :host { display: block; }
    h2 { border-left: 3px solid #0067b8; padding-left: 12px; }
    p { font-size: 15px; }
  `]
})
export class TermsComponent {
  constructor(private location: Location) {}
  goBack() { this.location.back(); }
}