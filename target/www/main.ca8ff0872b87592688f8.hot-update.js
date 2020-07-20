webpackHotUpdate("main",{

/***/ "./src/main/webapp/app/app.module.ts":
/*!*******************************************!*\
  !*** ./src/main/webapp/app/app.module.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\r\n__webpack_require__(/*! ./vendor.ts */ \"./src/main/webapp/app/vendor.ts\");\r\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\r\nvar platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ \"./node_modules/@angular/platform-browser/fesm5/platform-browser.js\");\r\nvar http_1 = __webpack_require__(/*! @angular/common/http */ \"./node_modules/@angular/common/fesm5/http.js\");\r\nvar http_2 = __webpack_require__(/*! @angular/common/http */ \"./node_modules/@angular/common/fesm5/http.js\");\r\nvar ngx_webstorage_1 = __webpack_require__(/*! ngx-webstorage */ \"./node_modules/ngx-webstorage/dist/app.js\");\r\nvar ng_jhipster_1 = __webpack_require__(/*! ng-jhipster */ \"./node_modules/ng-jhipster/index.js\");\r\nvar auth_interceptor_1 = __webpack_require__(/*! ./blocks/interceptor/auth.interceptor */ \"./src/main/webapp/app/blocks/interceptor/auth.interceptor.ts\");\r\nvar auth_expired_interceptor_1 = __webpack_require__(/*! ./blocks/interceptor/auth-expired.interceptor */ \"./src/main/webapp/app/blocks/interceptor/auth-expired.interceptor.ts\");\r\nvar errorhandler_interceptor_1 = __webpack_require__(/*! ./blocks/interceptor/errorhandler.interceptor */ \"./src/main/webapp/app/blocks/interceptor/errorhandler.interceptor.ts\");\r\nvar notification_interceptor_1 = __webpack_require__(/*! ./blocks/interceptor/notification.interceptor */ \"./src/main/webapp/app/blocks/interceptor/notification.interceptor.ts\");\r\nvar shared_1 = __webpack_require__(/*! app/shared */ \"./src/main/webapp/app/shared/index.ts\");\r\nvar core_2 = __webpack_require__(/*! app/core */ \"./src/main/webapp/app/core/index.ts\");\r\nvar app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ \"./src/main/webapp/app/app-routing.module.ts\");\r\nvar home_module_1 = __webpack_require__(/*! ./home/home.module */ \"./src/main/webapp/app/home/home.module.ts\");\r\nvar account_module_1 = __webpack_require__(/*! ./account/account.module */ \"./src/main/webapp/app/account/account.module.ts\");\r\nvar entity_module_1 = __webpack_require__(/*! ./entities/entity.module */ \"./src/main/webapp/app/entities/entity.module.ts\");\r\n// jhipster-needle-angular-add-module-import JHipster will add new module here\r\nvar layouts_1 = __webpack_require__(/*! ./layouts */ \"./src/main/webapp/app/layouts/index.ts\");\r\nvar forms_1 = __webpack_require__(/*! @angular/forms */ \"./node_modules/@angular/forms/fesm5/forms.js\");\r\nvar JiuzhangquanzhankeAppModule = /** @class */ (function () {\r\n    function JiuzhangquanzhankeAppModule() {\r\n    }\r\n    JiuzhangquanzhankeAppModule = tslib_1.__decorate([\r\n        core_1.NgModule({\r\n            imports: [\r\n                platform_browser_1.BrowserModule,\r\n                app_routing_module_1.JiuzhangquanzhankeAppRoutingModule,\r\n                ngx_webstorage_1.Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),\r\n                shared_1.JiuzhangquanzhankeSharedModule,\r\n                core_2.JiuzhangquanzhankeCoreModule,\r\n                home_module_1.JiuzhangquanzhankeHomeModule,\r\n                account_module_1.JiuzhangquanzhankeAccountModule,\r\n                entity_module_1.JiuzhangquanzhankeEntityModule,\r\n                http_1.HttpClientModule,\r\n                forms_1.FormsModule\r\n                // jhipster-needle-angular-add-module JHipster will add new module here\r\n            ],\r\n            declarations: [layouts_1.JhiMainComponent, layouts_1.NavbarComponent, layouts_1.ErrorComponent, layouts_1.PageRibbonComponent, layouts_1.FooterComponent],\r\n            providers: [\r\n                {\r\n                    provide: http_2.HTTP_INTERCEPTORS,\r\n                    useClass: auth_interceptor_1.AuthInterceptor,\r\n                    multi: true,\r\n                    deps: [ngx_webstorage_1.LocalStorageService, ngx_webstorage_1.SessionStorageService]\r\n                },\r\n                {\r\n                    provide: http_2.HTTP_INTERCEPTORS,\r\n                    useClass: auth_expired_interceptor_1.AuthExpiredInterceptor,\r\n                    multi: true,\r\n                    deps: [core_1.Injector]\r\n                },\r\n                {\r\n                    provide: http_2.HTTP_INTERCEPTORS,\r\n                    useClass: errorhandler_interceptor_1.ErrorHandlerInterceptor,\r\n                    multi: true,\r\n                    deps: [ng_jhipster_1.JhiEventManager]\r\n                },\r\n                {\r\n                    provide: http_2.HTTP_INTERCEPTORS,\r\n                    useClass: notification_interceptor_1.NotificationInterceptor,\r\n                    multi: true,\r\n                    deps: [core_1.Injector]\r\n                }\r\n            ],\r\n            bootstrap: [layouts_1.JhiMainComponent]\r\n        })\r\n    ], JiuzhangquanzhankeAppModule);\r\n    return JiuzhangquanzhankeAppModule;\r\n}());\r\nexports.JiuzhangquanzhankeAppModule = JiuzhangquanzhankeAppModule;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5tb2R1bGUudHM/YzVmOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwRUFBcUI7QUFFckIsb0dBQW1EO0FBQ25ELG9KQUEwRDtBQUMxRCw2R0FBd0Q7QUFDeEQsNkdBQXlEO0FBQ3pELDhHQUEyRjtBQUMzRixrR0FBOEM7QUFDOUMsMEpBQXdFO0FBQ3hFLGtMQUF1RjtBQUN2RixrTEFBd0Y7QUFDeEYsa0xBQXdGO0FBQ3hGLDhGQUE0RDtBQUM1RCx3RkFBd0Q7QUFDeEQsMEhBQTBFO0FBQzFFLCtHQUFrRTtBQUNsRSw4SEFBMkU7QUFDM0UsNkhBQTBFO0FBQzFFLDhFQUE4RTtBQUM5RSwrRkFBb0g7QUFDcEgsd0dBQTJDO0FBNkMzQztJQUFBO0lBQTBDLENBQUM7SUFBOUIsMkJBQTJCO1FBM0N2QyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsZ0NBQWE7Z0JBQ2IsdURBQWtDO2dCQUNsQyw4QkFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDO2dCQUN4RCx1Q0FBOEI7Z0JBQzlCLG1DQUE0QjtnQkFDNUIsMENBQTRCO2dCQUM1QixnREFBK0I7Z0JBQy9CLDhDQUE4QjtnQkFDOUIsdUJBQWdCO2dCQUNoQixtQkFBVztnQkFDWCx1RUFBdUU7YUFDMUU7WUFDRCxZQUFZLEVBQUUsQ0FBQywwQkFBZ0IsRUFBRSx5QkFBZSxFQUFFLHdCQUFjLEVBQUUsNkJBQW1CLEVBQUUseUJBQWUsQ0FBQztZQUN2RyxTQUFTLEVBQUU7Z0JBQ1A7b0JBQ0ksT0FBTyxFQUFFLHdCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLGtDQUFlO29CQUN6QixLQUFLLEVBQUUsSUFBSTtvQkFDWCxJQUFJLEVBQUUsQ0FBQyxvQ0FBbUIsRUFBRSxzQ0FBcUIsQ0FBQztpQkFDckQ7Z0JBQ0Q7b0JBQ0ksT0FBTyxFQUFFLHdCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLGlEQUFzQjtvQkFDaEMsS0FBSyxFQUFFLElBQUk7b0JBQ1gsSUFBSSxFQUFFLENBQUMsZUFBUSxDQUFDO2lCQUNuQjtnQkFDRDtvQkFDSSxPQUFPLEVBQUUsd0JBQWlCO29CQUMxQixRQUFRLEVBQUUsa0RBQXVCO29CQUNqQyxLQUFLLEVBQUUsSUFBSTtvQkFDWCxJQUFJLEVBQUUsQ0FBQyw2QkFBZSxDQUFDO2lCQUMxQjtnQkFDRDtvQkFDSSxPQUFPLEVBQUUsd0JBQWlCO29CQUMxQixRQUFRLEVBQUUsa0RBQXVCO29CQUNqQyxLQUFLLEVBQUUsSUFBSTtvQkFDWCxJQUFJLEVBQUUsQ0FBQyxlQUFRLENBQUM7aUJBQ25CO2FBQ0o7WUFDRCxTQUFTLEVBQUUsQ0FBQywwQkFBZ0IsQ0FBQztTQUNoQyxDQUFDO09BQ1csMkJBQTJCLENBQUc7SUFBRCxrQ0FBQztDQUFBO0FBQTlCLGtFQUEyQiIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvYXBwLm1vZHVsZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi92ZW5kb3IudHMnO1xuXG5pbXBvcnQgeyBOZ01vZHVsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nMldlYnN0b3JhZ2UsIExvY2FsU3RvcmFnZVNlcnZpY2UsIFNlc3Npb25TdG9yYWdlU2VydmljZSB9IGZyb20gJ25neC13ZWJzdG9yYWdlJztcbmltcG9ydCB7IEpoaUV2ZW50TWFuYWdlciB9IGZyb20gJ25nLWpoaXBzdGVyJztcbmltcG9ydCB7IEF1dGhJbnRlcmNlcHRvciB9IGZyb20gJy4vYmxvY2tzL2ludGVyY2VwdG9yL2F1dGguaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgQXV0aEV4cGlyZWRJbnRlcmNlcHRvciB9IGZyb20gJy4vYmxvY2tzL2ludGVyY2VwdG9yL2F1dGgtZXhwaXJlZC5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBFcnJvckhhbmRsZXJJbnRlcmNlcHRvciB9IGZyb20gJy4vYmxvY2tzL2ludGVyY2VwdG9yL2Vycm9yaGFuZGxlci5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25JbnRlcmNlcHRvciB9IGZyb20gJy4vYmxvY2tzL2ludGVyY2VwdG9yL25vdGlmaWNhdGlvbi5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBKaXV6aGFuZ3F1YW56aGFua2VTaGFyZWRNb2R1bGUgfSBmcm9tICdhcHAvc2hhcmVkJztcbmltcG9ydCB7IEppdXpoYW5ncXVhbnpoYW5rZUNvcmVNb2R1bGUgfSBmcm9tICdhcHAvY29yZSc7XG5pbXBvcnQgeyBKaXV6aGFuZ3F1YW56aGFua2VBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgSml1emhhbmdxdWFuemhhbmtlSG9tZU1vZHVsZSB9IGZyb20gJy4vaG9tZS9ob21lLm1vZHVsZSc7XG5pbXBvcnQgeyBKaXV6aGFuZ3F1YW56aGFua2VBY2NvdW50TW9kdWxlIH0gZnJvbSAnLi9hY2NvdW50L2FjY291bnQubW9kdWxlJztcbmltcG9ydCB7IEppdXpoYW5ncXVhbnpoYW5rZUVudGl0eU1vZHVsZSB9IGZyb20gJy4vZW50aXRpZXMvZW50aXR5Lm1vZHVsZSc7XG4vLyBqaGlwc3Rlci1uZWVkbGUtYW5ndWxhci1hZGQtbW9kdWxlLWltcG9ydCBKSGlwc3RlciB3aWxsIGFkZCBuZXcgbW9kdWxlIGhlcmVcbmltcG9ydCB7IEpoaU1haW5Db21wb25lbnQsIE5hdmJhckNvbXBvbmVudCwgRm9vdGVyQ29tcG9uZW50LCBQYWdlUmliYm9uQ29tcG9uZW50LCBFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cyc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgICAgIEppdXpoYW5ncXVhbnpoYW5rZUFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5nMldlYnN0b3JhZ2UuZm9yUm9vdCh7IHByZWZpeDogJ2poaScsIHNlcGFyYXRvcjogJy0nIH0pLFxuICAgICAgICBKaXV6aGFuZ3F1YW56aGFua2VTaGFyZWRNb2R1bGUsXG4gICAgICAgIEppdXpoYW5ncXVhbnpoYW5rZUNvcmVNb2R1bGUsXG4gICAgICAgIEppdXpoYW5ncXVhbnpoYW5rZUhvbWVNb2R1bGUsXG4gICAgICAgIEppdXpoYW5ncXVhbnpoYW5rZUFjY291bnRNb2R1bGUsXG4gICAgICAgIEppdXpoYW5ncXVhbnpoYW5rZUVudGl0eU1vZHVsZSxcbiAgICAgICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGVcbiAgICAgICAgLy8gamhpcHN0ZXItbmVlZGxlLWFuZ3VsYXItYWRkLW1vZHVsZSBKSGlwc3RlciB3aWxsIGFkZCBuZXcgbW9kdWxlIGhlcmVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW0poaU1haW5Db21wb25lbnQsIE5hdmJhckNvbXBvbmVudCwgRXJyb3JDb21wb25lbnQsIFBhZ2VSaWJib25Db21wb25lbnQsIEZvb3RlckNvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgICAgICAgdXNlQ2xhc3M6IEF1dGhJbnRlcmNlcHRvcixcbiAgICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICAgICAgZGVwczogW0xvY2FsU3RvcmFnZVNlcnZpY2UsIFNlc3Npb25TdG9yYWdlU2VydmljZV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICAgICAgICB1c2VDbGFzczogQXV0aEV4cGlyZWRJbnRlcmNlcHRvcixcbiAgICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICAgICAgZGVwczogW0luamVjdG9yXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgICAgICAgIHVzZUNsYXNzOiBFcnJvckhhbmRsZXJJbnRlcmNlcHRvcixcbiAgICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICAgICAgZGVwczogW0poaUV2ZW50TWFuYWdlcl1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICAgICAgICB1c2VDbGFzczogTm90aWZpY2F0aW9uSW50ZXJjZXB0b3IsXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgICAgIGRlcHM6IFtJbmplY3Rvcl1cbiAgICAgICAgfVxuICAgIF0sXG4gICAgYm9vdHN0cmFwOiBbSmhpTWFpbkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgSml1emhhbmdxdWFuemhhbmtlQXBwTW9kdWxlIHt9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/app.module.ts\n");

/***/ })

})