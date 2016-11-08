var url = "https://api.sendgrid.com/v3/mail/send";
function sendMail() {
    var http = new XMLHttpRequest();
    var data = {"personalizations": [{"to": [{"email": "riley.m.joseph1@gmail.com"}]}],"from": {"email": "example@example.com"},"subject": "Hello, World!","content": [{"type": "text/plain", "value": "Heya!"}]};
    http.open("POST", url, true);

    var options = ("Access-Control-Request-Method","Access-Control-Request-Headers")

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/jsonp", "Authorization", "Bearer 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", "origin","http://localhost:8000");

    http.send(data);
}


 var hsts = response.headers.get("strict-transport-security"),
      csp = response.headers.get("content-security-policy")

      
sendMail2(){ 
    var request = new XMLHttpRequest();
    var params = {"personalizations": [{"to": [{"email": "riley.m.joseph1@gmail.com"}]}],"from": {"email": "example@example.com"},"subject": "Hello, World!","content": [{"type": "text/plain", "value": "Heya!"}]};
    request.open('POST', url, true);
    request.onreadystatechange = function() {if (request.readyState==4) alert("It worked!");};
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.setRequestHeader("Content-length", params.length);
    request.setRequestHeader("Connection", "close");
    request.send(params);
}
