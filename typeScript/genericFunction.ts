// Make this identity function generic.
// This should fix the type errors on Line 13 and 15.
// Hint: The type for the value function parameter should use a type variable.

function identity<type>(value) {
    return value;
}

let value1 = identity<string>("France");

let value2 = identity<number>(67_413_000);
// ----

async function fetchData<Type>(url: string) {
    const response = await fetch(url);
    const responseBody = await response.json();

    return responseBody as Type;
}

interface User {
    name: string;
}
// Pass the User type as a type argument to the generic fetchData() function.
// This should fix the type error on Line 35.

let user = await fetchData<User>("http://api.com/user/1");

console.log(user.name);
// ----

export { };




// Make this LanguagesType interface generic.
// This should fix the type errors on Lines 14 and 21.
// Hint: The type for the languages property should use a type variable.

interface Country<T> {
    name: string;
    languages: T;
}

const languagesObj1: Country<string> = {
    name: "New Zealand",
    languages: "English, Māori"
};

console.log(languagesObj1.languages);

const languagesObj2: Country<string[]> = {
    name: "Spain",
    languages: ["Spanish", "Catalan", "Galician", "Basque", "Valencian"],
};

console.log(languagesObj2.languages.join(", "));

// ----

export { };

