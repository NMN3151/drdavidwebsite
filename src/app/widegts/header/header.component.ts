import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private router:Router){}
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


   bookdr(): void {
    this.closeMobileMenu();
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/speaking-to'], {
        fragment: 'invite-section'
      });
    });
  }



  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (!this.mobileMenuOpen) {
      this.mobileDropdown = null;
    }
  }

  downloadFile(path: string, filename: string): void {
  const anchor = document.createElement('a');
  anchor.href = path;
  anchor.download = filename;
  anchor.target = '_blank';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
    this.mobileDropdown = null;
  }

  toggleMobileDropdown(name: string): void {
    this.mobileDropdown = this.mobileDropdown === name ? null : name;
  }
}