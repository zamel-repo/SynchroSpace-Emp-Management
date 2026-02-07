import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-privacy',
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
        <h1 class="text-4xl font-semibold mb-2 text-gray-900">Privacy & Cookies</h1>
        <p class="text-[#0067b8] mb-10 text-xs font-bold tracking-widest uppercase">Corporate Confidentiality Protocol</p>

        <div class="space-y-12 bg-white p-10 shadow-[0_2px_4px_rgba(0,0,0,0.05)] border border-gray-200 rounded-sm">
          <section>
            <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Simulated Presence Data</h3>
            <h2 class="text-xl font-bold mb-4 text-gray-800">How we use your data</h2>
            <p class="text-gray-600 leading-relaxed">Our 2D simulation engine stores your avatar position and online status to create a synchronized environment. This data is encrypted and purged according to your company's retention schedule.</p>
          </section>

          <section>
            <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Technical Cookies</h3>
            <h2 class="text-xl font-bold mb-4 text-gray-800">Cookie Usage</h2>
            <p class="text-gray-600 leading-relaxed">SynchroSpace uses session-based cookies only to maintain your secure connection to the server. No third-party tracking or advertising pixels are integrated into this platform.</p>
          </section>

          <section>
            <div class="p-4 bg-blue-50 border-l-4 border-[#0067b8]">
              <p class="text-sm text-gray-700 font-medium">Note: All simulation logs are strictly for internal administrative review and are not shared with any external entity.</p>
            </div>
          </section>
        </div>
      </main>

      <footer class="p-8 border-t border-gray-200 text-center text-[11px] text-gray-400 font-medium italic">
        SynchroSpace Security Infrastructure v1.0
      </footer>
    </div>
  `,
  styles: [`
    :host { display: block; }
    p { font-size: 15px; }
  `]
})
export class PrivacyComponent {
  constructor(private location: Location) {}
  goBack() { this.location.back(); }
}