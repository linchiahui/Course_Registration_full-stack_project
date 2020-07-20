webpackHotUpdate("main",{

/***/ "./src/main/webapp/app/app.module.ts":
/*!*******************************************!*\
  !*** ./src/main/webapp/app/app.module.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\r\n__webpack_require__(/*! ./vendor.ts */ \"./src/main/webapp/app/vendor.ts\");\r\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\r\nvar platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ \"./node_modules/@angular/platform-browser/fesm5/platform-browser.js\");\r\nvar http_1 = __webpack_require__(/*! @angular/common/http */ \"./node_modules/@angular/common/fesm5/http.js\");\r\nvar http_2 = __webpack_require__(/*! @angular/common/http */ \"./node_modules/@angular/common/fesm5/http.js\");\r\nvar ngx_webstorage_1 = __webpack_require__(/*! ngx-webstorage */ \"./node_modules/ngx-webstorage/dist/app.js\");\r\nvar ng_jhipster_1 = __webpack_require__(/*! ng-jhipster */ \"./node_modules/ng-jhipster/index.js\");\r\nvar auth_interceptor_1 = __webpack_require__(/*! ./blocks/interceptor/auth.interceptor */ \"./src/main/webapp/app/blocks/interceptor/auth.interceptor.ts\");\r\nvar auth_expired_interceptor_1 = __webpack_require__(/*! ./blocks/interceptor/auth-expired.interceptor */ \"./src/main/webapp/app/blocks/interceptor/auth-expired.interceptor.ts\");\r\nvar errorhandler_interceptor_1 = __webpack_require__(/*! ./blocks/interceptor/errorhandler.interceptor */ \"./src/main/webapp/app/blocks/interceptor/errorhandler.interceptor.ts\");\r\nvar notification_interceptor_1 = __webpack_require__(/*! ./blocks/interceptor/notification.interceptor */ \"./src/main/webapp/app/blocks/interceptor/notification.interceptor.ts\");\r\nvar shared_1 = __webpack_require__(/*! app/shared */ \"./src/main/webapp/app/shared/index.ts\");\r\nvar core_2 = __webpack_require__(/*! app/core */ \"./src/main/webapp/app/core/index.ts\");\r\nvar app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ \"./src/main/webapp/app/app-routing.module.ts\");\r\nvar home_module_1 = __webpack_require__(/*! ./home/home.module */ \"./src/main/webapp/app/home/home.module.ts\");\r\nvar account_module_1 = __webpack_require__(/*! ./account/account.module */ \"./src/main/webapp/app/account/account.module.ts\");\r\nvar entity_module_1 = __webpack_require__(/*! ./entities/entity.module */ \"./src/main/webapp/app/entities/entity.module.ts\");\r\n// jhipster-needle-angular-add-module-import JHipster will add new module here\r\nvar layouts_1 = __webpack_require__(/*! ./layouts */ \"./src/main/webapp/app/layouts/index.ts\");\r\nvar JiuzhangquanzhankeAppModule = /** @class */ (function () {\r\n    function JiuzhangquanzhankeAppModule() {\r\n    }\r\n    JiuzhangquanzhankeAppModule = tslib_1.__decorate([\r\n        core_1.NgModule({\r\n            imports: [\r\n                platform_browser_1.BrowserModule,\r\n                app_routing_module_1.JiuzhangquanzhankeAppRoutingModule,\r\n                ngx_webstorage_1.Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),\r\n                shared_1.JiuzhangquanzhankeSharedModule,\r\n                core_2.JiuzhangquanzhankeCoreModule,\r\n                home_module_1.JiuzhangquanzhankeHomeModule,\r\n                account_module_1.JiuzhangquanzhankeAccountModule,\r\n                entity_module_1.JiuzhangquanzhankeEntityModule,\r\n                http_1.HttpClientModule,\r\n                Forms\r\n                // jhipster-needle-angular-add-module JHipster will add new module here\r\n            ],\r\n            declarations: [layouts_1.JhiMainComponent, layouts_1.NavbarComponent, layouts_1.ErrorComponent, layouts_1.PageRibbonComponent, layouts_1.FooterComponent],\r\n            providers: [\r\n                {\r\n                    provide: http_2.HTTP_INTERCEPTORS,\r\n                    useClass: auth_interceptor_1.AuthInterceptor,\r\n                    multi: true,\r\n                    deps: [ngx_webstorage_1.LocalStorageService, ngx_webstorage_1.SessionStorageService]\r\n                },\r\n                {\r\n                    provide: http_2.HTTP_INTERCEPTORS,\r\n                    useClass: auth_expired_interceptor_1.AuthExpiredInterceptor,\r\n                    multi: true,\r\n                    deps: [core_1.Injector]\r\n                },\r\n                {\r\n                    provide: http_2.HTTP_INTERCEPTORS,\r\n                    useClass: errorhandler_interceptor_1.ErrorHandlerInterceptor,\r\n                    multi: true,\r\n                    deps: [ng_jhipster_1.JhiEventManager]\r\n                },\r\n                {\r\n                    provide: http_2.HTTP_INTERCEPTORS,\r\n                    useClass: notification_interceptor_1.NotificationInterceptor,\r\n                    multi: true,\r\n                    deps: [core_1.Injector]\r\n                }\r\n            ],\r\n            bootstrap: [layouts_1.JhiMainComponent]\r\n        })\r\n    ], JiuzhangquanzhankeAppModule);\r\n    return JiuzhangquanzhankeAppModule;\r\n}());\r\nexports.JiuzhangquanzhankeAppModule = JiuzhangquanzhankeAppModule;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5tb2R1bGUudHM/YzVmOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwRUFBcUI7QUFFckIsb0dBQW1EO0FBQ25ELG9KQUEwRDtBQUMxRCw2R0FBd0Q7QUFDeEQsNkdBQXlEO0FBQ3pELDhHQUEyRjtBQUMzRixrR0FBOEM7QUFDOUMsMEpBQXdFO0FBQ3hFLGtMQUF1RjtBQUN2RixrTEFBd0Y7QUFDeEYsa0xBQXdGO0FBQ3hGLDhGQUE0RDtBQUM1RCx3RkFBd0Q7QUFDeEQsMEhBQTBFO0FBQzFFLCtHQUFrRTtBQUNsRSw4SEFBMkU7QUFDM0UsNkhBQTBFO0FBQzFFLDhFQUE4RTtBQUM5RSwrRkFBb0g7QUE2Q3BIO0lBQUE7SUFBMEMsQ0FBQztJQUE5QiwyQkFBMkI7UUEzQ3ZDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxnQ0FBYTtnQkFDYix1REFBa0M7Z0JBQ2xDLDhCQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUM7Z0JBQ3hELHVDQUE4QjtnQkFDOUIsbUNBQTRCO2dCQUM1QiwwQ0FBNEI7Z0JBQzVCLGdEQUErQjtnQkFDL0IsOENBQThCO2dCQUM5Qix1QkFBZ0I7Z0JBQ2hCLEtBQUs7Z0JBQ0wsdUVBQXVFO2FBQzFFO1lBQ0QsWUFBWSxFQUFFLENBQUMsMEJBQWdCLEVBQUUseUJBQWUsRUFBRSx3QkFBYyxFQUFFLDZCQUFtQixFQUFFLHlCQUFlLENBQUM7WUFDdkcsU0FBUyxFQUFFO2dCQUNQO29CQUNJLE9BQU8sRUFBRSx3QkFBaUI7b0JBQzFCLFFBQVEsRUFBRSxrQ0FBZTtvQkFDekIsS0FBSyxFQUFFLElBQUk7b0JBQ1gsSUFBSSxFQUFFLENBQUMsb0NBQW1CLEVBQUUsc0NBQXFCLENBQUM7aUJBQ3JEO2dCQUNEO29CQUNJLE9BQU8sRUFBRSx3QkFBaUI7b0JBQzFCLFFBQVEsRUFBRSxpREFBc0I7b0JBQ2hDLEtBQUssRUFBRSxJQUFJO29CQUNYLElBQUksRUFBRSxDQUFDLGVBQVEsQ0FBQztpQkFDbkI7Z0JBQ0Q7b0JBQ0ksT0FBTyxFQUFFLHdCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLGtEQUF1QjtvQkFDakMsS0FBSyxFQUFFLElBQUk7b0JBQ1gsSUFBSSxFQUFFLENBQUMsNkJBQWUsQ0FBQztpQkFDMUI7Z0JBQ0Q7b0JBQ0ksT0FBTyxFQUFFLHdCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLGtEQUF1QjtvQkFDakMsS0FBSyxFQUFFLElBQUk7b0JBQ1gsSUFBSSxFQUFFLENBQUMsZUFBUSxDQUFDO2lCQUNuQjthQUNKO1lBQ0QsU0FBUyxFQUFFLENBQUMsMEJBQWdCLENBQUM7U0FDaEMsQ0FBQztPQUNXLDJCQUEyQixDQUFHO0lBQUQsa0NBQUM7Q0FBQTtBQUE5QixrRUFBMkIiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5tb2R1bGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vdmVuZG9yLnRzJztcblxuaW1wb3J0IHsgTmdNb2R1bGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZzJXZWJzdG9yYWdlLCBMb2NhbFN0b3JhZ2VTZXJ2aWNlLCBTZXNzaW9uU3RvcmFnZVNlcnZpY2UgfSBmcm9tICduZ3gtd2Vic3RvcmFnZSc7XG5pbXBvcnQgeyBKaGlFdmVudE1hbmFnZXIgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5pbXBvcnQgeyBBdXRoSW50ZXJjZXB0b3IgfSBmcm9tICcuL2Jsb2Nrcy9pbnRlcmNlcHRvci9hdXRoLmludGVyY2VwdG9yJztcbmltcG9ydCB7IEF1dGhFeHBpcmVkSW50ZXJjZXB0b3IgfSBmcm9tICcuL2Jsb2Nrcy9pbnRlcmNlcHRvci9hdXRoLWV4cGlyZWQuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgRXJyb3JIYW5kbGVySW50ZXJjZXB0b3IgfSBmcm9tICcuL2Jsb2Nrcy9pbnRlcmNlcHRvci9lcnJvcmhhbmRsZXIuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uSW50ZXJjZXB0b3IgfSBmcm9tICcuL2Jsb2Nrcy9pbnRlcmNlcHRvci9ub3RpZmljYXRpb24uaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgSml1emhhbmdxdWFuemhhbmtlU2hhcmVkTW9kdWxlIH0gZnJvbSAnYXBwL3NoYXJlZCc7XG5pbXBvcnQgeyBKaXV6aGFuZ3F1YW56aGFua2VDb3JlTW9kdWxlIH0gZnJvbSAnYXBwL2NvcmUnO1xuaW1wb3J0IHsgSml1emhhbmdxdWFuemhhbmtlQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEppdXpoYW5ncXVhbnpoYW5rZUhvbWVNb2R1bGUgfSBmcm9tICcuL2hvbWUvaG9tZS5tb2R1bGUnO1xuaW1wb3J0IHsgSml1emhhbmdxdWFuemhhbmtlQWNjb3VudE1vZHVsZSB9IGZyb20gJy4vYWNjb3VudC9hY2NvdW50Lm1vZHVsZSc7XG5pbXBvcnQgeyBKaXV6aGFuZ3F1YW56aGFua2VFbnRpdHlNb2R1bGUgfSBmcm9tICcuL2VudGl0aWVzL2VudGl0eS5tb2R1bGUnO1xuLy8gamhpcHN0ZXItbmVlZGxlLWFuZ3VsYXItYWRkLW1vZHVsZS1pbXBvcnQgSkhpcHN0ZXIgd2lsbCBhZGQgbmV3IG1vZHVsZSBoZXJlXG5pbXBvcnQgeyBKaGlNYWluQ29tcG9uZW50LCBOYXZiYXJDb21wb25lbnQsIEZvb3RlckNvbXBvbmVudCwgUGFnZVJpYmJvbkNvbXBvbmVudCwgRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcbiAgICAgICAgSml1emhhbmdxdWFuemhhbmtlQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmcyV2Vic3RvcmFnZS5mb3JSb290KHsgcHJlZml4OiAnamhpJywgc2VwYXJhdG9yOiAnLScgfSksXG4gICAgICAgIEppdXpoYW5ncXVhbnpoYW5rZVNoYXJlZE1vZHVsZSxcbiAgICAgICAgSml1emhhbmdxdWFuemhhbmtlQ29yZU1vZHVsZSxcbiAgICAgICAgSml1emhhbmdxdWFuemhhbmtlSG9tZU1vZHVsZSxcbiAgICAgICAgSml1emhhbmdxdWFuemhhbmtlQWNjb3VudE1vZHVsZSxcbiAgICAgICAgSml1emhhbmdxdWFuemhhbmtlRW50aXR5TW9kdWxlLFxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgICBGb3Jtc1xuICAgICAgICAvLyBqaGlwc3Rlci1uZWVkbGUtYW5ndWxhci1hZGQtbW9kdWxlIEpIaXBzdGVyIHdpbGwgYWRkIG5ldyBtb2R1bGUgaGVyZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbSmhpTWFpbkNvbXBvbmVudCwgTmF2YmFyQ29tcG9uZW50LCBFcnJvckNvbXBvbmVudCwgUGFnZVJpYmJvbkNvbXBvbmVudCwgRm9vdGVyQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICAgICAgICB1c2VDbGFzczogQXV0aEludGVyY2VwdG9yLFxuICAgICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgICAgICBkZXBzOiBbTG9jYWxTdG9yYWdlU2VydmljZSwgU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgICAgICAgIHVzZUNsYXNzOiBBdXRoRXhwaXJlZEludGVyY2VwdG9yLFxuICAgICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgICAgICBkZXBzOiBbSW5qZWN0b3JdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgICAgICAgdXNlQ2xhc3M6IEVycm9ySGFuZGxlckludGVyY2VwdG9yLFxuICAgICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgICAgICBkZXBzOiBbSmhpRXZlbnRNYW5hZ2VyXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgICAgICAgIHVzZUNsYXNzOiBOb3RpZmljYXRpb25JbnRlcmNlcHRvcixcbiAgICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICAgICAgZGVwczogW0luamVjdG9yXVxuICAgICAgICB9XG4gICAgXSxcbiAgICBib290c3RyYXA6IFtKaGlNYWluQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBKaXV6aGFuZ3F1YW56aGFua2VBcHBNb2R1bGUge31cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/app.module.ts\n");

/***/ })

})