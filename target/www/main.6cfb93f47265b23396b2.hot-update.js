webpackHotUpdate("main",{

/***/ "./src/main/webapp/app/home/home.component.html":
/*!******************************************************!*\
  !*** ./src/main/webapp/app/home/home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"row\\\"> <div class=\\\"col-md-12\\\"> <h1 class=\\\"display-8\\\">Welcome to Course Registration</h1> <div [ngSwitch]=\\\"isAuthenticated()\\\"> <div class=\\\"alert alert-success\\\" *ngSwitchCase=\\\"true\\\"> <span *ngIf=\\\"account\\\"> You are logged in as user \\\"{{account.login}}\\\". </span> </div> <div class=\\\"alert alert-warning\\\" *ngSwitchCase=\\\"false\\\"> <span>If you want to </span> <a class=\\\"alert-link\\\" (click)=\\\"login()\\\">sign in</a><span>, you can try the default accounts:<br/>- Administrator (login=\\\"admin\\\" and password=\\\"admin\\\") <br/>- User (login=\\\"user\\\" and password=\\\"user\\\").</span> </div> <div class=\\\"alert alert-warning\\\" *ngSwitchCase=\\\"false\\\"> <span>You don't have an account yet?</span>&nbsp; <a class=\\\"alert-link\\\" routerLink=\\\"register\\\">Register a new account</a> </div> </div> <div *ngIf=\\\"isAuthenticated()\\\"> <hr> <span>Course Inquiry | Registration</span> <hr> <div><span><button (click)=\\\"getAllCourses()\\\">Show All Courses</button> <button (click)=\\\"clearAllCourses()\\\">Clear</button></span></div> <div *ngFor=\\\"let course of courses\\\" style=\\\"padding-bottom: 2px\\\"> <div style=\\\"display: flex; width: 100%; height: 40px; justify-content: space-between; border-top: 1px solid; border-bottom: 1px solid; border-left: 1px solid; border-right: 1px solid\\\"> <div style=\\\"padding-left: 5px\\\">{{course.courseName}}</div> <div>{{course.courseLocation}}</div> <div>{{course.courseContent}}</div> <div>{{course.teacherId}}</div> <button (click)=\\\"addCourseToStudent()\\\">Register Course</button> <button>Drop Course</button> </div> </div> </div> <div *ngIf=\\\"isAuthenticated()\\\"> <hr> <span>课程查询</span> <hr> <div><span><button (click)=\\\"getAllCoursesWithTN()\\\">显示所有课程</button> <button (click)=\\\"clearAllCourses()\\\">清除</button></span></div> <div *ngFor=\\\"let course of coursesWithTN\\\" style=\\\"padding-bottom: 2px\\\"> <div style=\\\"display: flex; width: 100%; height: 40px; justify-content: space-between; border-top: 1px solid; border-bottom: 1px solid; border-left: 1px solid; border-right: 1px solid\\\"> <div style=\\\"padding-left: 5px\\\">{{course.courseName}}</div> <div>{{course.courseLocation}}</div> <div>{{course.courseContent}}</div> <div>{{course.teacherName}}</div> </div> </div> </div> <hr> <div *ngIf=\\\"isAuthenticated()\\\"> <div> <span>Course Name</span> <input> </div> <br> <div> <span>Course Location</span> <input> </div> <br> <div> <span>Course content</span> <input> </div> <br> <div> <span>Professor</span> <input> </div> <button (click)=\\\"addCourseToStudent()\\\"> Create </button> </div> <div *ngIf=\\\"isAuthenticated()\\\"> <hr> <span>Registration</span> <hr> <div> <input [(ngModel)]=\\\"classNameNeedToReg\\\"> </div> <div> <span><button (click)=\\\"getAllCoursesWithTN()\\\">Register Course</button> </span> </div> </div> </div> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbD9jYzM5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFSQUFxUixlQUFlLHliQUF5Yiw0WkFBNFosYUFBYSxjQUFjLGdDQUFnQyx1QkFBdUIsMEJBQTBCLHdCQUF3QiwrREFBK0QsbUJBQW1CLGNBQWMsdUJBQXVCLGNBQWMsc0JBQXNCLGNBQWMsa0JBQWtCLG1hQUFtYSxhQUFhLGNBQWMsZ0NBQWdDLHVCQUF1QiwwQkFBMEIsd0JBQXdCLCtEQUErRCxtQkFBbUIsY0FBYyx1QkFBdUIsY0FBYyxzQkFBc0IsY0FBYyxvQkFBb0IiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPiA8aDEgY2xhc3M9XFxcImRpc3BsYXktOFxcXCI+V2VsY29tZSB0byBDb3Vyc2UgUmVnaXN0cmF0aW9uPC9oMT4gPGRpdiBbbmdTd2l0Y2hdPVxcXCJpc0F1dGhlbnRpY2F0ZWQoKVxcXCI+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcXFwiICpuZ1N3aXRjaENhc2U9XFxcInRydWVcXFwiPiA8c3BhbiAqbmdJZj1cXFwiYWNjb3VudFxcXCI+IFlvdSBhcmUgbG9nZ2VkIGluIGFzIHVzZXIgXFxcInt7YWNjb3VudC5sb2dpbn19XFxcIi4gPC9zcGFuPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtd2FybmluZ1xcXCIgKm5nU3dpdGNoQ2FzZT1cXFwiZmFsc2VcXFwiPiA8c3Bhbj5JZiB5b3Ugd2FudCB0byA8L3NwYW4+IDxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiAoY2xpY2spPVxcXCJsb2dpbigpXFxcIj5zaWduIGluPC9hPjxzcGFuPiwgeW91IGNhbiB0cnkgdGhlIGRlZmF1bHQgYWNjb3VudHM6PGJyLz4tIEFkbWluaXN0cmF0b3IgKGxvZ2luPVxcXCJhZG1pblxcXCIgYW5kIHBhc3N3b3JkPVxcXCJhZG1pblxcXCIpIDxici8+LSBVc2VyIChsb2dpbj1cXFwidXNlclxcXCIgYW5kIHBhc3N3b3JkPVxcXCJ1c2VyXFxcIikuPC9zcGFuPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtd2FybmluZ1xcXCIgKm5nU3dpdGNoQ2FzZT1cXFwiZmFsc2VcXFwiPiA8c3Bhbj5Zb3UgZG9uJ3QgaGF2ZSBhbiBhY2NvdW50IHlldD88L3NwYW4+Jm5ic3A7IDxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiByb3V0ZXJMaW5rPVxcXCJyZWdpc3RlclxcXCI+UmVnaXN0ZXIgYSBuZXcgYWNjb3VudDwvYT4gPC9kaXY+IDwvZGl2PiA8ZGl2ICpuZ0lmPVxcXCJpc0F1dGhlbnRpY2F0ZWQoKVxcXCI+IDxocj4gPHNwYW4+Q291cnNlIElucXVpcnkgfCBSZWdpc3RyYXRpb248L3NwYW4+IDxocj4gPGRpdj48c3Bhbj48YnV0dG9uIChjbGljayk9XFxcImdldEFsbENvdXJzZXMoKVxcXCI+U2hvdyBBbGwgQ291cnNlczwvYnV0dG9uPiA8YnV0dG9uIChjbGljayk9XFxcImNsZWFyQWxsQ291cnNlcygpXFxcIj5DbGVhcjwvYnV0dG9uPjwvc3Bhbj48L2Rpdj4gPGRpdiAqbmdGb3I9XFxcImxldCBjb3Vyc2Ugb2YgY291cnNlc1xcXCIgc3R5bGU9XFxcInBhZGRpbmctYm90dG9tOiAycHhcXFwiPiA8ZGl2IHN0eWxlPVxcXCJkaXNwbGF5OiBmbGV4OyB3aWR0aDogMTAwJTsgaGVpZ2h0OiA0MHB4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGJvcmRlci10b3A6IDFweCBzb2xpZDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkOyBib3JkZXItbGVmdDogMXB4IHNvbGlkOyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZFxcXCI+IDxkaXYgc3R5bGU9XFxcInBhZGRpbmctbGVmdDogNXB4XFxcIj57e2NvdXJzZS5jb3Vyc2VOYW1lfX08L2Rpdj4gPGRpdj57e2NvdXJzZS5jb3Vyc2VMb2NhdGlvbn19PC9kaXY+IDxkaXY+e3tjb3Vyc2UuY291cnNlQ29udGVudH19PC9kaXY+IDxkaXY+e3tjb3Vyc2UudGVhY2hlcklkfX08L2Rpdj4gPGJ1dHRvbiAoY2xpY2spPVxcXCJhZGRDb3Vyc2VUb1N0dWRlbnQoKVxcXCI+UmVnaXN0ZXIgQ291cnNlPC9idXR0b24+IDxidXR0b24+RHJvcCBDb3Vyc2U8L2J1dHRvbj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPGRpdiAqbmdJZj1cXFwiaXNBdXRoZW50aWNhdGVkKClcXFwiPiA8aHI+IDxzcGFuPuivvueoi+afpeivojwvc3Bhbj4gPGhyPiA8ZGl2PjxzcGFuPjxidXR0b24gKGNsaWNrKT1cXFwiZ2V0QWxsQ291cnNlc1dpdGhUTigpXFxcIj7mmL7npLrmiYDmnInor77nqIs8L2J1dHRvbj4gPGJ1dHRvbiAoY2xpY2spPVxcXCJjbGVhckFsbENvdXJzZXMoKVxcXCI+5riF6ZmkPC9idXR0b24+PC9zcGFuPjwvZGl2PiA8ZGl2ICpuZ0Zvcj1cXFwibGV0IGNvdXJzZSBvZiBjb3Vyc2VzV2l0aFROXFxcIiBzdHlsZT1cXFwicGFkZGluZy1ib3R0b206IDJweFxcXCI+IDxkaXYgc3R5bGU9XFxcImRpc3BsYXk6IGZsZXg7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDQwcHg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYm9yZGVyLXRvcDogMXB4IHNvbGlkOyBib3JkZXItYm90dG9tOiAxcHggc29saWQ7IGJvcmRlci1sZWZ0OiAxcHggc29saWQ7IGJvcmRlci1yaWdodDogMXB4IHNvbGlkXFxcIj4gPGRpdiBzdHlsZT1cXFwicGFkZGluZy1sZWZ0OiA1cHhcXFwiPnt7Y291cnNlLmNvdXJzZU5hbWV9fTwvZGl2PiA8ZGl2Pnt7Y291cnNlLmNvdXJzZUxvY2F0aW9ufX08L2Rpdj4gPGRpdj57e2NvdXJzZS5jb3Vyc2VDb250ZW50fX08L2Rpdj4gPGRpdj57e2NvdXJzZS50ZWFjaGVyTmFtZX19PC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IDxocj4gPGRpdiAqbmdJZj1cXFwiaXNBdXRoZW50aWNhdGVkKClcXFwiPiA8ZGl2PiA8c3Bhbj5Db3Vyc2UgTmFtZTwvc3Bhbj4gPGlucHV0PiA8L2Rpdj4gPGJyPiA8ZGl2PiA8c3Bhbj5Db3Vyc2UgTG9jYXRpb248L3NwYW4+IDxpbnB1dD4gPC9kaXY+IDxicj4gPGRpdj4gPHNwYW4+Q291cnNlIGNvbnRlbnQ8L3NwYW4+IDxpbnB1dD4gPC9kaXY+IDxicj4gPGRpdj4gPHNwYW4+UHJvZmVzc29yPC9zcGFuPiA8aW5wdXQ+IDwvZGl2PiA8YnV0dG9uIChjbGljayk9XFxcImFkZENvdXJzZVRvU3R1ZGVudCgpXFxcIj4gQ3JlYXRlIDwvYnV0dG9uPiA8L2Rpdj4gPGRpdiAqbmdJZj1cXFwiaXNBdXRoZW50aWNhdGVkKClcXFwiPiA8aHI+IDxzcGFuPlJlZ2lzdHJhdGlvbjwvc3Bhbj4gPGhyPiA8ZGl2PiA8aW5wdXQgWyhuZ01vZGVsKV09XFxcImNsYXNzTmFtZU5lZWRUb1JlZ1xcXCI+IDwvZGl2PiA8ZGl2PiA8c3Bhbj48YnV0dG9uIChjbGljayk9XFxcImdldEFsbENvdXJzZXNXaXRoVE4oKVxcXCI+UmVnaXN0ZXIgQ291cnNlPC9idXR0b24+IDwvc3Bhbj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/home/home.component.html\n");

/***/ })

})