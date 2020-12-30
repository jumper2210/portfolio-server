const nodemailer = require("nodemailer")
const mailGun = require("nodemailer-mailgun-transport")
const keys = require("../env")

const auth = {
  auth: {
    api_key: keys.api_key,
    domain: keys.domain,
  },
}

exports.sendMail = (req, res, next) => {
  const { name, email, message } = req.body
  const transporter = nodemailer.createTransport(mailGun(auth))

  const mailOptions = {
    sender: name,
    from: email,
    to: "skaczacy4@gmail.com",
    text: message,
  }

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log(err)
    }
  })
}
