

const Hello = () => {
    const language = useContext(LanguageContext);
    return <h2>{translations[language]}</h2>;
  }

  export default Hello;