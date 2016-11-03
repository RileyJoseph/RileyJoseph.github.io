function sendMail() {
    var http = new XMLHttpRequest();
    var url = "https://api.sendgrid.com/v3/mail/send";
    var data = {"personalizations": [{"to": [{"email": "riley.m.joseph1@gmail.com"}]}],"from": {"email": "example@example.com"},"subject": "Hello, World!","content": [{"type": "text/plain", "value": "Heya!"}]};
    http.open("POST", url, true);
    var key =

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/json");

    http.send(data);
}