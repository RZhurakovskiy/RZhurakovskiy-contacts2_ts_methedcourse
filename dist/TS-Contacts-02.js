"use strict";
const persons = [
    {
        name: "Иван Петров",
        age: 27,
        group: "SEO-специалист",
    },
    {
        name: "Марат Aляуддинов",
        age: 20,
        group: "Музыкант",
    },
    {
        name: "Анастасия Махнева",
        age: 32,
        group: "Супруга",
    },
    {
        name: "Елизавета Махнева",
        age: 12,
        group: "Дочь",
    },
    {
        name: "Дмитрий Астафьев",
        age: 27,
        role: "Admin",
    },
];
const logPerson = (user) => {
    console.log(`${user.name}, ${user.age}`);
};
persons.forEach(logPerson);
