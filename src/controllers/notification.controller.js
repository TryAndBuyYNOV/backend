const Email = require('../models/email.model');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.acceptedOffer = (req, res) => {
    console.log('Accept offer',req.body);
    const sender = req.body.sellerEmail;
    const receiverName = req.body.buyerName;
    const receiverEmail = req.body.buyerEmail;
    const productTitle = req.body.productTitle;
    const email = new Email({
        to: receiverEmail,
        from: sender,
        subject: 'Your proposal has been accepted',
        html: `<p>Dear ${receiverName},</p><p>We are pleased to inform you that you can now process to the paymnent for <strong>${productTitle}<strong/><p/><p>Best regards,</p><p>Try & Buy<p/>`,
        duration: 604800 // 1 semaine
    });
    console.log("Trying to send email",email);
    sgMail.send(email).then(() => {
        console.log('Email sent');
        res.send(true);
        email.save().catch(err=>console.log('error while trying to save email in bdd',err));
    })
    .catch((error) => {
        console.error(error)
    });

};

exports.sentProduct = (req, res) => {
    console.log('Sent product',req.body);
    const sender = req.body.sellerEmail;
    const receiverName = req.body.buyerName;
    const receiverEmail = req.body.buyerEmail;
    const productTitle = req.body.productTitle;
    const email = new Email({
        to: receiverEmail,
        from: sender,
        subject: 'Your product has been sent',
        html: `<p>Dear ${receiverName},</p><p>We are pleased to inform you that you can now <strong>${productTitle}<strong/>has been sent by the seller.<p/><p>Best regards,</p><p>Try & Buy<p/>`,
        duration: 604800 // 1 semaine
    });
    console.log("Trying to send email",email);
    sgMail.send(email).then(() => {
        console.log('Email sent');
        res.send(true);
        email.save().catch(err=>console.log('error while trying to save email in bdd',err));
    })
    .catch((error) => {
        console.error(error)
    });
};