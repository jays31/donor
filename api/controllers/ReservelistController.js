// Author: Jay Sharma (B00824331)

/**
 * ReservelistController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    create: function (req, res) {

        var demail = req.body.email_res;
        var nodemailer = require('nodemailer');

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: false,
            auth: {
                user: 'fooddonor0@gmail.com',
                pass: 'Donor@123'
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        let HelperOptions = {
            from: 'fooddonor0@gmail.com',
            to: demail,
            subject: 'Item reservation',
            text: 'Thanks for reserving item with Donor Plus! You may continue reserving more items and pick them up at your convenience.'
        };

        transporter.sendMail(HelperOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log("The message was sent!");
            console.log(info);
        });

        return res.redirect("/inventory");

    }
};