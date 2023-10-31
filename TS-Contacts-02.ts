type User = {
    name: string;
    age: number;
    group: string;
};


type Admin = {
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const persons: Person[] = [
    {
        name: 'Иван Петров',
        age: 27,
        group: 'SEO-специалист',
    },
    {
        name: 'Марат Aляуддинов',
        age: 20,
        group: 'Музыкант',
    },
    {
        name: 'Анастасия Махнева',
        age: 32,
        group: 'Супруга',
    },
    {
        name: 'Елизавета Махнева',
        age: 12,
        group: 'Дочь',
    },
    {
        name: "Дмитрий Астафьев",
        age: 27,
        role: "Admin",
    },
];

const logPerson = (user: Person) => {
  console.log(`${user.name}, ${user.age}`);
};

persons.forEach(logPerson);