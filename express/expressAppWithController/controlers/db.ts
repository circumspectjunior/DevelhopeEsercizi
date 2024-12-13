import pgPromise from "pg-promise";




const db = pgPromise()("postgres://postgres:PrinceAlex10@localhost:5432/demoDB");

export {
    db
};



