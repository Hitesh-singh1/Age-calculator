function calculateAge() {
    let dob = document.getElementById("dob").value;

    if (dob === "") {
        alert("Please select your Date of Birth");
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById("age").value = age + " years";
}