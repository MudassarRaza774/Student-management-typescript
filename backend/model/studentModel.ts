import {
    Sequelize, DataTypes, Model, Dialect
} from 'sequelize';

const sequelize = new Sequelize( //making connection with database
    process.env.DB_NAME!,
    process.env.USER_NAME!,
    process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT as Dialect
}
);

sequelize.authenticate() //CHECKING IF THE CONNECTION IS ESTABLISHED
    .then(() => {
        console.log("Database Connected Successfully")
    })
    .catch((err) => {
        console.log("Database Connection Failed", err)
    })

interface StudentAttributesInterface { //CLASS HAS TO FOLLOW THIS STRUCTURE
    id?: string,
    firstName: string,
    lastName: string,
    gender: string,
    age: string
}

export class Student extends Model<StudentAttributesInterface> {
}

Student.init( //"INIT" WILL CREATE THE TABLE OF THIS SPECIFICATIONS
    {
        firstName: {
            type: DataTypes.STRING(128),
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        age: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false,
        sequelize,
        tableName: "students"
    }
)
sequelize.sync({ force: false }) //will make the table if not already made but not re-create the table 
    .then(() => {
    }).catch((error) => {
        console.log(`error at creating of student table with ${error}`)
    })