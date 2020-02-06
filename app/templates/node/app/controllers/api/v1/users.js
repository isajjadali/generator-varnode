'use strict';

const {
    asyncMiddleware,
    commonFunctions,
} = global;

const { Users } = global.db;

module.exports = function (router) {

    router.get('/', asyncMiddleware(async (req, res) => {
    <% if (db === 'sequelize') { %>

            let user = await Users.findOne({ where: { email: 'sajjad@gmail.com' } });

            if (!user) {
                user = await Users.create({
                    email: 'sajjad@gmail.com',
                    firstName: 'Sajjad',
                    lastName: 'Ali'
                });
            }

            const token = commonFunctions.createToken({
                id: user.id,
                email: user.email,
            });

            res.http200({
                user: user,
                token: token,
            });

    <% } else if (db === 'mongoose') { %>

            let user = await Users.findOne({ email: 'sajjad@gmail.com' });

            if (!user) {
                user = await Users.create({
                    email: 'sajjad@gmail.com',
                    firstName: 'Sajjad',
                    lastName: 'Ali'
                });
            }

            const token = commonFunctions.createToken({
                _id: user._id,
                email: user.email
            });

            res.status(200).json({
                user: user,
                token: token,
            });
    <% } else { } %>
  });

};
