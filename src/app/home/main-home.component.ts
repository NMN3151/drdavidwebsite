import { Component } from '@angular/core';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent {
 isSidebarCollapsed: boolean = false;

  ngOnInit(): void {
    // Listen to sidebar state changes
    this.checkSidebarState();
    
    // Listen to localStorage changes
    window.addEventListener('storage', () => {
      this.checkSidebarState();
    });

    // Poll for changes (since localStorage events don't fire in same tab)
    setInterval(() => {
      this.checkSidebarState();
    }, 100);
  }

  checkSidebarState(): void {
    const savedState = localStorage.getItem('sidebarCollapsed');
    this.isSidebarCollapsed = savedState === 'true';
  }
}
