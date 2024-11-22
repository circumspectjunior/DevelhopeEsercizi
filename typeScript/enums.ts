enum Currency {
    "Euro" = "€",
    "Dollar" = "$"
    

}

// Update the type for the `currency` property in this interface to use the `Currency` enum.

interface Country {
    name: string;
    currency: string;
}

// Replace the string values for the `currency` properties below with

const countries: Country[] = [
    {
        name: "France",
        currency: Currency.Euro,
    },
    {
        name: "United States of America",
        currency: Currency.Dollar,
    },
    {
        name: "Italy",
        currency: Currency.Euro,
    },
    {
        name: "New Zealand",
        currency: Currency.Dollar,
    },
];

// Create a string enum named `LanguageStatus`. Use it to replace the
// string values for the `status` properties in the objects below.

enum LanguageStatus {
    "primaryStatus" = "primary",
    "secondaryStatus" = "secondary"
}

interface Status {
    language: string
    status: string
    
}

const countryLanguages: Status[] = [
    { language: "Spanish", status: LanguageStatus.primaryStatus },
    { language: "English", status: LanguageStatus.secondaryStatus},
];

export { };
