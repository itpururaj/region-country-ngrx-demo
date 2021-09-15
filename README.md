# RegionCountryNgrxDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

## Development server

Run `npm install` to install required libraries.

Run `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further Information and Assumptions

1. County info is the main component which works as an container for region and country dropdowns and country details table. 

2. A reusable component select-list is created which use used to display regions and countries. It's debatable that should it perform task to load either region or country depending on the flag passed to it or should it just display whatever data is passed to it. 

Ideally I prefer it to work based on single responsibility principal. It triggers event which can be handled.

3. Country details component is created to show the detail information of the country as expected like name, capital, population, currencies and flag. It is not a reusable component to display different data structure, but it can be extended to except header and data. But there are various table components which can be used for this purpose.

4. UI can be made better like alignments, bold heading if preferred. To save click on selection of region countries can be displayed in list like view rather than dropdown as there is lots of space, so user can save clicks on country selection to see details.

5. Further unit tests can be added to make it full proof.
6. ESLint is installed to check syntax, find problems. It can be further configured to enforce code style.
7. We can use Huskey to lint commit messages, run tests, lint code, etc... when we commit or push.


