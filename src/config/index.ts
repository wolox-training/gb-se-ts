export const config = {
    baseURL: process.env.baseURL,
    adminUser: {
        email: process.env.adminUser,
        password: process.env.adminPass
    },
    regularUser: {
        email: process.env.regularUser,
        password: process.env.regularPass
    }
};