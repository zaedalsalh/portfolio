emailjs.init("PIlZesob61jTDHXvo");

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.elements["name"].value;
  const email = this.elements["email"].value;
  const message = this.elements["message"].value;
  const subject = this.elements["subject"].value;

  const templateParams = {
    name: name,
    email: email,
    message: message,
    subject : subject,
  };

  emailjs.send("service_6piqicq", "template_33jg0xk", templateParams).then(
    () => {
      alert("تم الإرسال بنجاح!");
    },
    (error) => {
      alert("حدث خطأ في الإرسال: " + error.text);
    }
  );
});
