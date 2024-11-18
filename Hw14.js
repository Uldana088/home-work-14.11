let password = "amjilt_the_best";
let password2 = 5;

for (let attempt = 0; attempt <= password2; attempt++) {
    let password3 = prompt("Парольді енгізіңіз:");

    if (password3 === password) {
        alert("пароль дурыс");
        break;
    } else {
        alert(` ${password2 - attempt - 1} мүмкіндік қалды`);
    }

    if (attempt === password2 - 1) {
        alert("Too many attempts");
    }
}
