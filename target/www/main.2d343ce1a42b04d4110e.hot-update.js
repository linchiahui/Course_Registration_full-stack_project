webpackHotUpdate("main",{

/***/ "./src/main/webapp/app/layouts/navbar/navbar.component.html":
/*!******************************************************************!*\
  !*** ./src/main/webapp/app/layouts/navbar/navbar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<nav class=\\\"navbar navbar-dark navbar-expand-md jh-navbar\\\"> <div class=\\\"jh-logo-container float-left\\\"> <a class=\\\"jh-navbar-toggler d-lg-none float-right\\\" href=\\\"javascript:void(0);\\\" data-toggle=\\\"collapse\\\" data-target=\\\"#navbarResponsive\\\" aria-controls=\\\"navbarResponsive\\\" aria-expanded=\\\"false\\\" aria-label=\\\"Toggle navigation\\\" (click)=\\\"toggleNavbar()\\\"> <fa-icon [icon]=\\\"'bars'\\\"></fa-icon> </a> <a class=\\\"navbar-brand logo float-left\\\" routerLink=\\\"/\\\" (click)=\\\"collapseNavbar()\\\"> <span class=\\\"logo-img\\\"></span> <span class=\\\"navbar-title\\\">Godfrey Course Re</span> <span class=\\\"navbar-version\\\">{{version}}</span> </a> </div> <div class=\\\"navbar-collapse collapse\\\" id=\\\"navbarResponsive\\\" [ngbCollapse]=\\\"isNavbarCollapsed\\\" [ngSwitch]=\\\"isAuthenticated()\\\"> <ul class=\\\"navbar-nav ml-auto\\\"> <li class=\\\"nav-item\\\" routerLinkActive=\\\"active\\\" [routerLinkActiveOptions]=\\\"{exact: true}\\\"> <a class=\\\"nav-link\\\" routerLink=\\\"/\\\" (click)=\\\"collapseNavbar()\\\"> <span> <fa-icon [icon]=\\\"'home'\\\"></fa-icon> <span>Home</span> </span> </a> </li> <li *ngSwitchCase=\\\"true\\\" ngbDropdown class=\\\"nav-item dropdown pointer\\\" routerLinkActive=\\\"active\\\" [routerLinkActiveOptions]=\\\"{exact: true}\\\"> <a class=\\\"nav-link dropdown-toggle\\\" ngbDropdownToggle href=\\\"javascript:void(0);\\\" id=\\\"entity-menu\\\"> <span> <fa-icon [icon]=\\\"'th-list'\\\"></fa-icon> <span> Entities </span> </span> </a> <ul class=\\\"dropdown-menu\\\" ngbDropdownMenu> </ul> </li> <li *jhiHasAnyAuthority=\\\"'ROLE_ADMIN'\\\" ngbDropdown class=\\\"nav-item dropdown pointer\\\" routerLinkActive=\\\"active\\\" [routerLinkActiveOptions]=\\\"{exact: true}\\\"> <a class=\\\"nav-link dropdown-toggle\\\" ngbDropdownToggle href=\\\"javascript:void(0);\\\" id=\\\"admin-menu\\\"> <span> <fa-icon [icon]=\\\"'user-plus'\\\"></fa-icon> <span>Administration</span> </span> </a> <ul class=\\\"dropdown-menu\\\" ngbDropdownMenu> <li> <a class=\\\"dropdown-item\\\" routerLink=\\\"admin/user-management\\\" routerLinkActive=\\\"active\\\" (click)=\\\"collapseNavbar()\\\"> <fa-icon [icon]=\\\"'user'\\\" [fixedWidth]=\\\"true\\\"></fa-icon> <span>User management</span> </a> </li> <li> <a class=\\\"dropdown-item\\\" routerLink=\\\"admin/jhi-metrics\\\" routerLinkActive=\\\"active\\\" (click)=\\\"collapseNavbar()\\\"> <fa-icon [icon]=\\\"'tachometer-alt'\\\" [fixedWidth]=\\\"true\\\"></fa-icon> <span>Metrics</span> </a> </li> <li> <a class=\\\"dropdown-item\\\" routerLink=\\\"admin/jhi-health\\\" routerLinkActive=\\\"active\\\" (click)=\\\"collapseNavbar()\\\"> <fa-icon [icon]=\\\"'heart'\\\" [fixedWidth]=\\\"true\\\"></fa-icon> <span>Health</span> </a> </li> <li> <a class=\\\"dropdown-item\\\" routerLink=\\\"admin/jhi-configuration\\\" routerLinkActive=\\\"active\\\" (click)=\\\"collapseNavbar()\\\"> <fa-icon [icon]=\\\"'list'\\\" [fixedWidth]=\\\"true\\\"></fa-icon> <span>Configuration</span> </a> </li> <li> <a class=\\\"dropdown-item\\\" routerLink=\\\"admin/audits\\\" routerLinkActive=\\\"active\\\" (click)=\\\"collapseNavbar()\\\"> <fa-icon [icon]=\\\"'bell'\\\" [fixedWidth]=\\\"true\\\"></fa-icon> <span>Audits</span> </a> </li> <li> <a class=\\\"dropdown-item\\\" routerLink=\\\"admin/logs\\\" routerLinkActive=\\\"active\\\" (click)=\\\"collapseNavbar()\\\"> <fa-icon [icon]=\\\"'tasks'\\\" [fixedWidth]=\\\"true\\\"></fa-icon> <span>Logs</span> </a> </li> <li *ngIf=\\\"swaggerEnabled\\\"> <a class=\\\"dropdown-item\\\" routerLink=\\\"admin/docs\\\" routerLinkActive=\\\"active\\\" (click)=\\\"collapseNavbar()\\\"> <fa-icon [icon]=\\\"'book'\\\" [fixedWidth]=\\\"true\\\"></fa-icon> <span>API</span> </a> </li> </ul> </li> <li ngbDropdown class=\\\"nav-item dropdown pointer\\\" placement=\\\"bottom-right\\\" routerLinkActive=\\\"active\\\" [routerLinkActiveOptions]=\\\"{exact: true}\\\"> <a class=\\\"nav-link dropdown-toggle\\\" ngbDropdownToggle href=\\\"javascript:void(0);\\\" id=\\\"account-menu\\\"> <span *ngIf=\\\"!getImageUrl()\\\"> <fa-icon [icon]=\\\"'user'\\\"></fa-icon> <span> Account </span> </span> <span *ngIf=\\\"getImageUrl()\\\"> <img [src]=\\\"getImageUrl()\\\" class=\\\"profile-image img-circle\\\" alt=\\\"Avatar\\\"> </span> </a> <ul class=\\\"dropdown-menu\\\" ngbDropdownMenu> <li *ngSwitchCase=\\\"true\\\"> <a class=\\\"dropdown-item\\\" routerLink=\\\"settings\\\" routerLinkActive=\\\"active\\\" (click)=\\\"collapseNavbar()\\\"> <fa-icon [icon]=\\\"'wrench'\\\" [fixedWidth]=\\\"true\\\"></fa-icon> <span>Settings</span> </a> </li> <li *ngSwitchCase=\\\"true\\\"> <a class=\\\"dropdown-item\\\" routerLink=\\\"password\\\" routerLinkActive=\\\"active\\\" (click)=\\\"collapseNavbar()\\\"> <fa-icon [icon]=\\\"'clock'\\\" [fixedWidth]=\\\"true\\\"></fa-icon> <span>Password</span> </a> </li> <li *ngSwitchCase=\\\"true\\\"> <a class=\\\"dropdown-item\\\" (click)=\\\"logout()\\\" id=\\\"logout\\\"> <fa-icon [icon]=\\\"'sign-out-alt'\\\" [fixedWidth]=\\\"true\\\"></fa-icon> <span>Sign out</span> </a> </li> <li *ngSwitchCase=\\\"false\\\"> <a class=\\\"dropdown-item\\\" (click)=\\\"login()\\\" id=\\\"login\\\"> <fa-icon [icon]=\\\"'sign-in-alt'\\\" [fixedWidth]=\\\"true\\\"></fa-icon> <span>Sign in</span> </a> </li> <li *ngSwitchCase=\\\"false\\\"> <a class=\\\"dropdown-item\\\" routerLink=\\\"register\\\" routerLinkActive=\\\"active\\\" (click)=\\\"collapseNavbar()\\\"> <fa-icon [icon]=\\\"'user-plus'\\\" [fixedWidth]=\\\"true\\\"></fa-icon> <span>Register</span> </a> </li> </ul> </li> </ul> </div> </nav> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuaHRtbD8xMDNjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRNQUE0TSxrYkFBa2IsU0FBUyw0UUFBNFEsWUFBWSwrUkFBK1IsWUFBWSxzRkFBc0YsdVRBQXVULFlBQVksc0ZBQXNGLG16REFBbXpELFlBQVksc0ZBQXNGIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50Lmh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1kYXJrIG5hdmJhci1leHBhbmQtbWQgamgtbmF2YmFyXFxcIj4gPGRpdiBjbGFzcz1cXFwiamgtbG9nby1jb250YWluZXIgZmxvYXQtbGVmdFxcXCI+IDxhIGNsYXNzPVxcXCJqaC1uYXZiYXItdG9nZ2xlciBkLWxnLW5vbmUgZmxvYXQtcmlnaHRcXFwiIGhyZWY9XFxcImphdmFzY3JpcHQ6dm9pZCgwKTtcXFwiIGRhdGEtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCIgZGF0YS10YXJnZXQ9XFxcIiNuYXZiYXJSZXNwb25zaXZlXFxcIiBhcmlhLWNvbnRyb2xzPVxcXCJuYXZiYXJSZXNwb25zaXZlXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCIgYXJpYS1sYWJlbD1cXFwiVG9nZ2xlIG5hdmlnYXRpb25cXFwiIChjbGljayk9XFxcInRvZ2dsZU5hdmJhcigpXFxcIj4gPGZhLWljb24gW2ljb25dPVxcXCInYmFycydcXFwiPjwvZmEtaWNvbj4gPC9hPiA8YSBjbGFzcz1cXFwibmF2YmFyLWJyYW5kIGxvZ28gZmxvYXQtbGVmdFxcXCIgcm91dGVyTGluaz1cXFwiL1xcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJsb2dvLWltZ1xcXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwibmF2YmFyLXRpdGxlXFxcIj5Hb2RmcmV5IENvdXJzZSBSZTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcIm5hdmJhci12ZXJzaW9uXFxcIj57e3ZlcnNpb259fTwvc3Bhbj4gPC9hPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwibmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlXFxcIiBpZD1cXFwibmF2YmFyUmVzcG9uc2l2ZVxcXCIgW25nYkNvbGxhcHNlXT1cXFwiaXNOYXZiYXJDb2xsYXBzZWRcXFwiIFtuZ1N3aXRjaF09XFxcImlzQXV0aGVudGljYXRlZCgpXFxcIj4gPHVsIGNsYXNzPVxcXCJuYXZiYXItbmF2IG1sLWF1dG9cXFwiPiA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIFtyb3V0ZXJMaW5rQWN0aXZlT3B0aW9uc109XFxcIntleGFjdDogdHJ1ZX1cXFwiPiA8YSBjbGFzcz1cXFwibmF2LWxpbmtcXFwiIHJvdXRlckxpbms9XFxcIi9cXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8c3Bhbj4gPGZhLWljb24gW2ljb25dPVxcXCInaG9tZSdcXFwiPjwvZmEtaWNvbj4gPHNwYW4+SG9tZTwvc3Bhbj4gPC9zcGFuPiA8L2E+IDwvbGk+IDxsaSAqbmdTd2l0Y2hDYXNlPVxcXCJ0cnVlXFxcIiBuZ2JEcm9wZG93biBjbGFzcz1cXFwibmF2LWl0ZW0gZHJvcGRvd24gcG9pbnRlclxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPVxcXCJ7ZXhhY3Q6IHRydWV9XFxcIj4gPGEgY2xhc3M9XFxcIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVxcXCIgbmdiRHJvcGRvd25Ub2dnbGUgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApO1xcXCIgaWQ9XFxcImVudGl0eS1tZW51XFxcIj4gPHNwYW4+IDxmYS1pY29uIFtpY29uXT1cXFwiJ3RoLWxpc3QnXFxcIj48L2ZhLWljb24+IDxzcGFuPiBFbnRpdGllcyA8L3NwYW4+IDwvc3Bhbj4gPC9hPiA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiIG5nYkRyb3Bkb3duTWVudT4gPC91bD4gPC9saT4gPGxpICpqaGlIYXNBbnlBdXRob3JpdHk9XFxcIidST0xFX0FETUlOJ1xcXCIgbmdiRHJvcGRvd24gY2xhc3M9XFxcIm5hdi1pdGVtIGRyb3Bkb3duIHBvaW50ZXJcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cXFwie2V4YWN0OiB0cnVlfVxcXCI+IDxhIGNsYXNzPVxcXCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcXFwiIG5nYkRyb3Bkb3duVG9nZ2xlIGhyZWY9XFxcImphdmFzY3JpcHQ6dm9pZCgwKTtcXFwiIGlkPVxcXCJhZG1pbi1tZW51XFxcIj4gPHNwYW4+IDxmYS1pY29uIFtpY29uXT1cXFwiJ3VzZXItcGx1cydcXFwiPjwvZmEtaWNvbj4gPHNwYW4+QWRtaW5pc3RyYXRpb248L3NwYW4+IDwvc3Bhbj4gPC9hPiA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiIG5nYkRyb3Bkb3duTWVudT4gPGxpPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwiYWRtaW4vdXNlci1tYW5hZ2VtZW50XFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8ZmEtaWNvbiBbaWNvbl09XFxcIid1c2VyJ1xcXCIgW2ZpeGVkV2lkdGhdPVxcXCJ0cnVlXFxcIj48L2ZhLWljb24+IDxzcGFuPlVzZXIgbWFuYWdlbWVudDwvc3Bhbj4gPC9hPiA8L2xpPiA8bGk+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJhZG1pbi9qaGktbWV0cmljc1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGZhLWljb24gW2ljb25dPVxcXCIndGFjaG9tZXRlci1hbHQnXFxcIiBbZml4ZWRXaWR0aF09XFxcInRydWVcXFwiPjwvZmEtaWNvbj4gPHNwYW4+TWV0cmljczwvc3Bhbj4gPC9hPiA8L2xpPiA8bGk+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJhZG1pbi9qaGktaGVhbHRoXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8ZmEtaWNvbiBbaWNvbl09XFxcIidoZWFydCdcXFwiIFtmaXhlZFdpZHRoXT1cXFwidHJ1ZVxcXCI+PC9mYS1pY29uPiA8c3Bhbj5IZWFsdGg8L3NwYW4+IDwvYT4gPC9saT4gPGxpPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwiYWRtaW4vamhpLWNvbmZpZ3VyYXRpb25cXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxmYS1pY29uIFtpY29uXT1cXFwiJ2xpc3QnXFxcIiBbZml4ZWRXaWR0aF09XFxcInRydWVcXFwiPjwvZmEtaWNvbj4gPHNwYW4+Q29uZmlndXJhdGlvbjwvc3Bhbj4gPC9hPiA8L2xpPiA8bGk+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJhZG1pbi9hdWRpdHNcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxmYS1pY29uIFtpY29uXT1cXFwiJ2JlbGwnXFxcIiBbZml4ZWRXaWR0aF09XFxcInRydWVcXFwiPjwvZmEtaWNvbj4gPHNwYW4+QXVkaXRzPC9zcGFuPiA8L2E+IDwvbGk+IDxsaT4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcImFkbWluL2xvZ3NcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxmYS1pY29uIFtpY29uXT1cXFwiJ3Rhc2tzJ1xcXCIgW2ZpeGVkV2lkdGhdPVxcXCJ0cnVlXFxcIj48L2ZhLWljb24+IDxzcGFuPkxvZ3M8L3NwYW4+IDwvYT4gPC9saT4gPGxpICpuZ0lmPVxcXCJzd2FnZ2VyRW5hYmxlZFxcXCI+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJhZG1pbi9kb2NzXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8ZmEtaWNvbiBbaWNvbl09XFxcIidib29rJ1xcXCIgW2ZpeGVkV2lkdGhdPVxcXCJ0cnVlXFxcIj48L2ZhLWljb24+IDxzcGFuPkFQSTwvc3Bhbj4gPC9hPiA8L2xpPiA8L3VsPiA8L2xpPiA8bGkgbmdiRHJvcGRvd24gY2xhc3M9XFxcIm5hdi1pdGVtIGRyb3Bkb3duIHBvaW50ZXJcXFwiIHBsYWNlbWVudD1cXFwiYm90dG9tLXJpZ2h0XFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIFtyb3V0ZXJMaW5rQWN0aXZlT3B0aW9uc109XFxcIntleGFjdDogdHJ1ZX1cXFwiPiA8YSBjbGFzcz1cXFwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXFxcIiBuZ2JEcm9wZG93blRvZ2dsZSBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMCk7XFxcIiBpZD1cXFwiYWNjb3VudC1tZW51XFxcIj4gPHNwYW4gKm5nSWY9XFxcIiFnZXRJbWFnZVVybCgpXFxcIj4gPGZhLWljb24gW2ljb25dPVxcXCIndXNlcidcXFwiPjwvZmEtaWNvbj4gPHNwYW4+IEFjY291bnQgPC9zcGFuPiA8L3NwYW4+IDxzcGFuICpuZ0lmPVxcXCJnZXRJbWFnZVVybCgpXFxcIj4gPGltZyBbc3JjXT1cXFwiZ2V0SW1hZ2VVcmwoKVxcXCIgY2xhc3M9XFxcInByb2ZpbGUtaW1hZ2UgaW1nLWNpcmNsZVxcXCIgYWx0PVxcXCJBdmF0YXJcXFwiPiA8L3NwYW4+IDwvYT4gPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIiBuZ2JEcm9wZG93bk1lbnU+IDxsaSAqbmdTd2l0Y2hDYXNlPVxcXCJ0cnVlXFxcIj4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcInNldHRpbmdzXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8ZmEtaWNvbiBbaWNvbl09XFxcIid3cmVuY2gnXFxcIiBbZml4ZWRXaWR0aF09XFxcInRydWVcXFwiPjwvZmEtaWNvbj4gPHNwYW4+U2V0dGluZ3M8L3NwYW4+IDwvYT4gPC9saT4gPGxpICpuZ1N3aXRjaENhc2U9XFxcInRydWVcXFwiPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwicGFzc3dvcmRcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxmYS1pY29uIFtpY29uXT1cXFwiJ2Nsb2NrJ1xcXCIgW2ZpeGVkV2lkdGhdPVxcXCJ0cnVlXFxcIj48L2ZhLWljb24+IDxzcGFuPlBhc3N3b3JkPC9zcGFuPiA8L2E+IDwvbGk+IDxsaSAqbmdTd2l0Y2hDYXNlPVxcXCJ0cnVlXFxcIj4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIChjbGljayk9XFxcImxvZ291dCgpXFxcIiBpZD1cXFwibG9nb3V0XFxcIj4gPGZhLWljb24gW2ljb25dPVxcXCInc2lnbi1vdXQtYWx0J1xcXCIgW2ZpeGVkV2lkdGhdPVxcXCJ0cnVlXFxcIj48L2ZhLWljb24+IDxzcGFuPlNpZ24gb3V0PC9zcGFuPiA8L2E+IDwvbGk+IDxsaSAqbmdTd2l0Y2hDYXNlPVxcXCJmYWxzZVxcXCI+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiAoY2xpY2spPVxcXCJsb2dpbigpXFxcIiBpZD1cXFwibG9naW5cXFwiPiA8ZmEtaWNvbiBbaWNvbl09XFxcIidzaWduLWluLWFsdCdcXFwiIFtmaXhlZFdpZHRoXT1cXFwidHJ1ZVxcXCI+PC9mYS1pY29uPiA8c3Bhbj5TaWduIGluPC9zcGFuPiA8L2E+IDwvbGk+IDxsaSAqbmdTd2l0Y2hDYXNlPVxcXCJmYWxzZVxcXCI+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJyZWdpc3RlclxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGZhLWljb24gW2ljb25dPVxcXCIndXNlci1wbHVzJ1xcXCIgW2ZpeGVkV2lkdGhdPVxcXCJ0cnVlXFxcIj48L2ZhLWljb24+IDxzcGFuPlJlZ2lzdGVyPC9zcGFuPiA8L2E+IDwvbGk+IDwvdWw+IDwvbGk+IDwvdWw+IDwvZGl2PiA8L25hdj4gXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/layouts/navbar/navbar.component.html\n");

/***/ })

})