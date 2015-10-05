// $.ajax({

//   // The 'type' property sets the HTTP method.
//   // A value of 'PUT' or 'DELETE' will trigger a preflight request.
//   type: 'POST',

//   // The URL to make the request to.
//   url: 'https://api.mailgun.net/v3/aguiapiscinas.com.br/messages',

//   dataType: 'json',
//   username:'api',
//   password: 'key-7232a8e5b9de4d8d77ab7abe09f694f1',

//   data: {
//     name: "asda",
//     phone: "asdasd",
//     email: "asdasd@asdasd.com",
//     message: "asdasdasd",
//     text: "text",
//     subject: "asdasd",
//     from: "contato@aguiapiscinas.com.br",
//     to: "wendellp.barreto@gmail.com"
//   },

//   // The 'contentType' property sets the 'Content-Type' header.
//   // The JQuery default for this property is
//   // 'application/x-www-form-urlencoded; charset=UTF-8', which does not trigger
//   // a preflight. If you set this value to anything other than
//   // application/x-www-form-urlencoded, multipart/form-data, or text/plain,
//   // you will trigger a preflight request.
//   contentType: 'text/plain',

//   xhrFields: {
//     // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
//     // This can be used to set the 'withCredentials' property.
//     // Set the value to 'true' if you'd like to pass cookies to the server.
//     // If this is enabled, your server must respond with the header
//     // 'Access-Control-Allow-Credentials: true'.
//     withCredentials: false
//   },

//   headers: {
//     // Set any custom headers here.
//     // If you set any non-simple headers, your server must include these
//     // headers in the 'Access-Control-Allow-Headers' response header.
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
//     "Access-Control-Allow-Headers": "accept, origin, content-type, authorization",
//     "Authorization": "Basic " + btoa("api:key-7232a8e5b9de4d8d77ab7abe09f694f1"),
//   },

//   success: function() {
//     alert('ok');
//     // Here's where you handle a successful response.
//   },

//   error: function(error) {
//     console.log(error);
//     alert('problems');
//     // Here's where you handle an error response.
//     // Note that if the error was due to a CORS issue,
//     // this function will still fire, but there won't be any additional
//     // information about the error.
//   }
// });
