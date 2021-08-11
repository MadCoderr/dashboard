export const send = async (_message) => {
  const response = await fetch("/api/send_sms", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: _message }),
  });

  return await response.json();
};
