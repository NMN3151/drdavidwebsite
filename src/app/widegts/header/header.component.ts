import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isScrolled = false;
  mobileMenuOpen = false;
  activeDropdown: string | null = null;
  mobileDropdown: string | null = null;

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 20;
  }

  openDropdown(name: string): void {
    this.activeDropdown = name;
  }

  closeDropdown(): void {
    this.activeDropdown = null;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (!this.mobileMenuOpen) {
      this.mobileDropdown = null;
    }
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
    this.mobileDropdown = null;
  }

  toggleMobileDropdown(name: string): void {
    this.mobileDropdown = this.mobileDropdown === name ? null : name;
  }
}