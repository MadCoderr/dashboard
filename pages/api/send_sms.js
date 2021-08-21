const { api_key_test, api_key_live, phone_number } = require("@/lib/keys");
const messagebird = require("messagebird")(api_key_test);

export default function handler(req, res) {
  const { message } = req.body;

  messagebird.messages.create(
    {
      originator: phone_number,
      recipients: [phone_number],
      body: message,
    },
    (err, response) => {
      if (err) {
        res.status(err.statusCode).json({ msg: "something went wrong", err });
      } else {
        res.status(200).json({ msg: "send", response });
      }
    }
  );
}
