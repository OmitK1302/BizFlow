import bcrypt from 'bcrypt.js'

const users = [
    {
        firstname: 'Rishabh',
        lastname: 'Khuswaha',
        password: bcrypt.hashSync('123456', 10),
        email: 'rishabh.admin@email.com',
        isAdmin: true,
        role: "Seller"
    },
    {
        firstname: 'Omit',
        lastname: 'Kumar',
        password: bcrypt.hashSync('654321', 10),
        email: 'omit.admin@email.com',
        isAdmin: true,
        role: "Seller"
    },
    {
        firstname: 'Aryan',
        lastname: 'Kumar',
        password: bcrypt.hashSync('123123', 10),
        email: 'aryan@email.com',
        isAdmin: false,
        role: "Seller"
    }
]

export default users;