/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'mkhy19-dev', // the auth0 domain prefix
    audience: 'coffeeshopAPI', // the audience set for the auth0 app
    clientId: 'r64rFHJEexWaj41BZf4YVv2I0yc2dqM3', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100', // the base url of the running ionic application. 
  }
};
