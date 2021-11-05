export const config = {
    allScriptsTimeout: 5000,
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