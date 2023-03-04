// let mailOptions = {
//   from: "bliss.therapyservice@gmail.com",
//   to: req.body.email,
//   subject: "Sending Email using Node.js",
//   text: "That was easy!",
// };
const getMailOptions =  (receiver) => {
    let mailOptions = {
        from: "bliss.therapyservice@gmail.com",
        to: receiver,
        subject: "Sending Email using Node.js",
        text: "That was easy!",
      };
      return mailOptions
}

module.exports = {getMailOptions}