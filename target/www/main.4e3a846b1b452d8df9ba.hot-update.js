webpackHotUpdate("main",{

/***/ "./src/main/webapp/app/home/home.component.html":
/*!******************************************************!*\
  !*** ./src/main/webapp/app/home/home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"row\\\"> <div class=\\\"col-md-12\\\"> <h1 class=\\\"display-8\\\">Welcome to Course Registration</h1> <div [ngSwitch]=\\\"isAuthenticated()\\\"> <div class=\\\"alert alert-success\\\" *ngSwitchCase=\\\"true\\\"> <span *ngIf=\\\"account\\\"> You are logged in as user \\\"{{account.login}}\\\". </span> </div> <div class=\\\"alert alert-warning\\\" *ngSwitchCase=\\\"false\\\"> <span>If you want to </span> <a class=\\\"alert-link\\\" (click)=\\\"login()\\\">sign in</a><span>, you can try the default accounts:<br/>- Administrator (login=\\\"admin\\\" and password=\\\"admin\\\") <br/>- User (login=\\\"user\\\" and password=\\\"user\\\").</span> </div> <div class=\\\"alert alert-warning\\\" *ngSwitchCase=\\\"false\\\"> <span>You don't have an account yet?</span>&nbsp; <a class=\\\"alert-link\\\" routerLink=\\\"register\\\">Register a new account</a> </div> </div> <div *ngIf=\\\"isAuthenticated()\\\"> <hr> <span>Course Inquiry | Registration</span> <hr> <div><span><button (click)=\\\"getAllCourses()\\\">Show All Courses</button> <button (click)=\\\"clearAllCourses()\\\">Clear</button></span></div> <div *ngFor=\\\"let course of courses\\\" style=\\\"padding-bottom: 2px\\\"> <div style=\\\"display: flex; width: 100%; height: 40px; justify-content: space-between; border-top: 1px solid; border-bottom: 1px solid; border-left: 1px solid; border-right: 1px solid\\\"> <div style=\\\"padding-left: 5px\\\" class=\\\"col-xs-3\\\">{{course.courseName}}</div> <div class=\\\"col-xs-3\\\">{{course.courseLocation}}</div> <div class=\\\"col-xs-3\\\">{{course.courseContent}}</div> <div class=\\\"col-xs-3\\\">{{course.teacherId}}</div> <button (click)=\\\"addCourseToStudent()\\\">Register Course</button> <button>Drop Course</button> </div> </div> </div> <div *ngIf=\\\"isAuthenticated()\\\"> <hr> <span>Registered Courses</span> <hr> <div><span><button (click)=\\\"getAllCoursesWithTN()\\\">Show All Courses</button> <button (click)=\\\"clearAllCoursesTN()\\\">Clear</button></span></div> <div *ngFor=\\\"let course of coursesWithTN\\\" style=\\\"padding-bottom: 2px\\\"> <div style=\\\"display: flex; width: 100%; height: 40px; justify-content: space-between; border-top: 1px solid; border-bottom: 1px solid; border-left: 1px solid; border-right: 1px solid\\\"> <div style=\\\"padding-left: 5px\\\">{{course.courseName}}</div> <div>{{course.courseLocation}}</div> <div>{{course.courseContent}}</div> <div>{{course.teacherName}}</div> </div> </div> </div> <hr> <div *ngIf=\\\"isAuthenticated()\\\"> <div> <span>Course Name</span> <input> </div> <br> <div> <span>Course Location</span> <input> </div> <br> <div> <span>Course content</span> <input> </div> <br> <div> <span>Professor</span> <input> </div> <button (click)=\\\"addCourseToStudent()\\\"> Create </button> </div> <div *ngIf=\\\"isAuthenticated()\\\"> <hr> <span>Registration</span> <hr> <div> <input [(ngModel)]=\\\"classNameNeedToReg\\\"> </div> <div> <span><button (click)=\\\"getAllCoursesWithTN()\\\">Register Course</button> </span> </div> </div> </div> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbD9jYzM5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFSQUFxUixlQUFlLHliQUF5Yiw0WkFBNFosYUFBYSxjQUFjLGdDQUFnQyx1QkFBdUIsMEJBQTBCLHdCQUF3QixrRkFBa0YsbUJBQW1CLGlDQUFpQyx1QkFBdUIsaUNBQWlDLHNCQUFzQixpQ0FBaUMsa0JBQWtCLGdjQUFnYyxhQUFhLGNBQWMsZ0NBQWdDLHVCQUF1QiwwQkFBMEIsd0JBQXdCLCtEQUErRCxtQkFBbUIsY0FBYyx1QkFBdUIsY0FBYyxzQkFBc0IsY0FBYyxvQkFBb0IiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMTJcXFwiPiA8aDEgY2xhc3M9XFxcImRpc3BsYXktOFxcXCI+V2VsY29tZSB0byBDb3Vyc2UgUmVnaXN0cmF0aW9uPC9oMT4gPGRpdiBbbmdTd2l0Y2hdPVxcXCJpc0F1dGhlbnRpY2F0ZWQoKVxcXCI+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcXFwiICpuZ1N3aXRjaENhc2U9XFxcInRydWVcXFwiPiA8c3BhbiAqbmdJZj1cXFwiYWNjb3VudFxcXCI+IFlvdSBhcmUgbG9nZ2VkIGluIGFzIHVzZXIgXFxcInt7YWNjb3VudC5sb2dpbn19XFxcIi4gPC9zcGFuPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtd2FybmluZ1xcXCIgKm5nU3dpdGNoQ2FzZT1cXFwiZmFsc2VcXFwiPiA8c3Bhbj5JZiB5b3Ugd2FudCB0byA8L3NwYW4+IDxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiAoY2xpY2spPVxcXCJsb2dpbigpXFxcIj5zaWduIGluPC9hPjxzcGFuPiwgeW91IGNhbiB0cnkgdGhlIGRlZmF1bHQgYWNjb3VudHM6PGJyLz4tIEFkbWluaXN0cmF0b3IgKGxvZ2luPVxcXCJhZG1pblxcXCIgYW5kIHBhc3N3b3JkPVxcXCJhZG1pblxcXCIpIDxici8+LSBVc2VyIChsb2dpbj1cXFwidXNlclxcXCIgYW5kIHBhc3N3b3JkPVxcXCJ1c2VyXFxcIikuPC9zcGFuPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtd2FybmluZ1xcXCIgKm5nU3dpdGNoQ2FzZT1cXFwiZmFsc2VcXFwiPiA8c3Bhbj5Zb3UgZG9uJ3QgaGF2ZSBhbiBhY2NvdW50IHlldD88L3NwYW4+Jm5ic3A7IDxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiByb3V0ZXJMaW5rPVxcXCJyZWdpc3RlclxcXCI+UmVnaXN0ZXIgYSBuZXcgYWNjb3VudDwvYT4gPC9kaXY+IDwvZGl2PiA8ZGl2ICpuZ0lmPVxcXCJpc0F1dGhlbnRpY2F0ZWQoKVxcXCI+IDxocj4gPHNwYW4+Q291cnNlIElucXVpcnkgfCBSZWdpc3RyYXRpb248L3NwYW4+IDxocj4gPGRpdj48c3Bhbj48YnV0dG9uIChjbGljayk9XFxcImdldEFsbENvdXJzZXMoKVxcXCI+U2hvdyBBbGwgQ291cnNlczwvYnV0dG9uPiA8YnV0dG9uIChjbGljayk9XFxcImNsZWFyQWxsQ291cnNlcygpXFxcIj5DbGVhcjwvYnV0dG9uPjwvc3Bhbj48L2Rpdj4gPGRpdiAqbmdGb3I9XFxcImxldCBjb3Vyc2Ugb2YgY291cnNlc1xcXCIgc3R5bGU9XFxcInBhZGRpbmctYm90dG9tOiAycHhcXFwiPiA8ZGl2IHN0eWxlPVxcXCJkaXNwbGF5OiBmbGV4OyB3aWR0aDogMTAwJTsgaGVpZ2h0OiA0MHB4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGJvcmRlci10b3A6IDFweCBzb2xpZDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkOyBib3JkZXItbGVmdDogMXB4IHNvbGlkOyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZFxcXCI+IDxkaXYgc3R5bGU9XFxcInBhZGRpbmctbGVmdDogNXB4XFxcIiBjbGFzcz1cXFwiY29sLXhzLTNcXFwiPnt7Y291cnNlLmNvdXJzZU5hbWV9fTwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtM1xcXCI+e3tjb3Vyc2UuY291cnNlTG9jYXRpb259fTwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtM1xcXCI+e3tjb3Vyc2UuY291cnNlQ29udGVudH19PC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC14cy0zXFxcIj57e2NvdXJzZS50ZWFjaGVySWR9fTwvZGl2PiA8YnV0dG9uIChjbGljayk9XFxcImFkZENvdXJzZVRvU3R1ZGVudCgpXFxcIj5SZWdpc3RlciBDb3Vyc2U8L2J1dHRvbj4gPGJ1dHRvbj5Ecm9wIENvdXJzZTwvYnV0dG9uPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8ZGl2ICpuZ0lmPVxcXCJpc0F1dGhlbnRpY2F0ZWQoKVxcXCI+IDxocj4gPHNwYW4+UmVnaXN0ZXJlZCBDb3Vyc2VzPC9zcGFuPiA8aHI+IDxkaXY+PHNwYW4+PGJ1dHRvbiAoY2xpY2spPVxcXCJnZXRBbGxDb3Vyc2VzV2l0aFROKClcXFwiPlNob3cgQWxsIENvdXJzZXM8L2J1dHRvbj4gPGJ1dHRvbiAoY2xpY2spPVxcXCJjbGVhckFsbENvdXJzZXNUTigpXFxcIj5DbGVhcjwvYnV0dG9uPjwvc3Bhbj48L2Rpdj4gPGRpdiAqbmdGb3I9XFxcImxldCBjb3Vyc2Ugb2YgY291cnNlc1dpdGhUTlxcXCIgc3R5bGU9XFxcInBhZGRpbmctYm90dG9tOiAycHhcXFwiPiA8ZGl2IHN0eWxlPVxcXCJkaXNwbGF5OiBmbGV4OyB3aWR0aDogMTAwJTsgaGVpZ2h0OiA0MHB4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGJvcmRlci10b3A6IDFweCBzb2xpZDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkOyBib3JkZXItbGVmdDogMXB4IHNvbGlkOyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZFxcXCI+IDxkaXYgc3R5bGU9XFxcInBhZGRpbmctbGVmdDogNXB4XFxcIj57e2NvdXJzZS5jb3Vyc2VOYW1lfX08L2Rpdj4gPGRpdj57e2NvdXJzZS5jb3Vyc2VMb2NhdGlvbn19PC9kaXY+IDxkaXY+e3tjb3Vyc2UuY291cnNlQ29udGVudH19PC9kaXY+IDxkaXY+e3tjb3Vyc2UudGVhY2hlck5hbWV9fTwvZGl2PiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8aHI+IDxkaXYgKm5nSWY9XFxcImlzQXV0aGVudGljYXRlZCgpXFxcIj4gPGRpdj4gPHNwYW4+Q291cnNlIE5hbWU8L3NwYW4+IDxpbnB1dD4gPC9kaXY+IDxicj4gPGRpdj4gPHNwYW4+Q291cnNlIExvY2F0aW9uPC9zcGFuPiA8aW5wdXQ+IDwvZGl2PiA8YnI+IDxkaXY+IDxzcGFuPkNvdXJzZSBjb250ZW50PC9zcGFuPiA8aW5wdXQ+IDwvZGl2PiA8YnI+IDxkaXY+IDxzcGFuPlByb2Zlc3Nvcjwvc3Bhbj4gPGlucHV0PiA8L2Rpdj4gPGJ1dHRvbiAoY2xpY2spPVxcXCJhZGRDb3Vyc2VUb1N0dWRlbnQoKVxcXCI+IENyZWF0ZSA8L2J1dHRvbj4gPC9kaXY+IDxkaXYgKm5nSWY9XFxcImlzQXV0aGVudGljYXRlZCgpXFxcIj4gPGhyPiA8c3Bhbj5SZWdpc3RyYXRpb248L3NwYW4+IDxocj4gPGRpdj4gPGlucHV0IFsobmdNb2RlbCldPVxcXCJjbGFzc05hbWVOZWVkVG9SZWdcXFwiPiA8L2Rpdj4gPGRpdj4gPHNwYW4+PGJ1dHRvbiAoY2xpY2spPVxcXCJnZXRBbGxDb3Vyc2VzV2l0aFROKClcXFwiPlJlZ2lzdGVyIENvdXJzZTwvYnV0dG9uPiA8L3NwYW4+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiBcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/home/home.component.html\n");

/***/ })

})