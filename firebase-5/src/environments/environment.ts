// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const firebaseConfig = {

  apiKey: "AIzaSyBrqgwwbQpWyMKh_gL_fiXzZcabMUCJHlU",

  authDomain: "mikrobypages.firebaseapp.com",

  projectId: "mikrobypages",

  storageBucket: "mikrobypages.appspot.com",

  messagingSenderId: "75476334152",

  appId: "1:75476334152:web:8193789ba063281227ca7d"

};



export const environment = {
  production: false,
  firebaseConfig,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
