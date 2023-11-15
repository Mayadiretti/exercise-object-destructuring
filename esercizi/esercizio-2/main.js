const stringa = '{"id":1, "nome":"John Doe", "email":"john.doe@examole.com"}';

const translate = JSON.parse(stringa);

console.log(translate.email, translate.id)
