function sendMail(event){
    event.preventDefault();
    const data = new FormData(event.target);
    fetch("https://formspree.io/f/mjkroeej", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "./sent_mail.html";
    });
}