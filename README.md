# Course Registration

## Development

Before you can build this project, you must install and configure the following dependencies on your machine:

1. [Node.js][]: We use Node to run a development web server and build the project.
   Depending on your system, you can install Node either from source or as a pre-packaged bundle.
2. [Yarn][]: We use Yarn to manage Node dependencies.
   Depending on your system, you can install Yarn either from source or as a pre-packaged bundle.

After installing Node, you should be able to run the following command to install development tools.

    yarn install

Run the following commands in two separate terminals to create a blissful development experience where your browser
auto-refreshes when files change on your hard drive.

    ./mvnw
    
    yarn start
    
[Yarn][] is also used to manage CSS and JavaScript dependencies used in this application. You can upgrade dependencies by
specifying a newer version in [package.json](package.json). You can also run `yarn update` and `yarn install` to manage dependencies.
Add the `help` flag on any command to see how you can use it. For example, `yarn help update`.

The `yarn run` command will list all of the scripts available to run for this project.

### Using angular-cli

You can also use [Angular CLI][] to generate some custom client code.

For example, the following command:

    ng generate component my-component-name

will generate few files:

    create src/main/webapp/app/my-component/my-component.component.html
    create src/main/webapp/app/my-component/my-component.component.ts
    update src/main/webapp/app/app.module.ts

[JHipster Homepage and latest documentation]: https://www.jhipster.tech
[JHipster 5.1.0 archive]: https://www.jhipster.tech/documentation-archive/v5.1.0

[Using JHipster in development]: https://www.jhipster.tech/documentation-archive/v5.1.0/development/
[Service Discovery and Configuration with the JHipster-Registry]: https://www.jhipster.tech/documentation-archive/v5.1.0/microservices-architecture/#jhipster-registry
[Using Docker and Docker-Compose]: https://www.jhipster.tech/documentation-archive/v5.1.0/docker-compose
[Using JHipster in production]: https://www.jhipster.tech/documentation-archive/v5.1.0/production/
[Running tests page]: https://www.jhipster.tech/documentation-archive/v5.1.0/running-tests/
[Setting up Continuous Integration]: https://www.jhipster.tech/documentation-archive/v5.1.0/setting-up-ci/


[Node.js]: https://nodejs.org/
[Yarn]: https://yarnpkg.org/
[Webpack]: https://webpack.github.io/
[Angular CLI]: https://cli.angular.io/
[BrowserSync]: http://www.browsersync.io/
[Jest]: https://facebook.github.io/jest/
[Jasmine]: http://jasmine.github.io/2.0/introduction.html
[Protractor]: https://angular.github.io/protractor/
[Leaflet]: http://leafletjs.com/
[DefinitelyTyped]: http://definitelytyped.org/
