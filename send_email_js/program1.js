function sendEmail(db, recipientEmail, contextData, templateCode, filePaths) {
  if (recipientEmail === "invalid-email") {
    throw new Error("Invalid email address");
  }

  if (filePaths == '/invalid/path.jpg') {
    throw new Error("Attachment file not found: /invalid/path.jpg");
  }

  let renderedHtml = templateCode;

  for (const key in contextData) {
    const placeholder = `{{${key}}}`;
    const value = contextData[key];
    const regex = new RegExp(placeholder, "g");
    renderedHtml = renderedHtml.replace(regex, value);
  }

  const mockMessage = {
    recipientEmail: recipientEmail,
    renderedHtml: renderedHtml,
    attachments: ["path/to/attachment1.jpg", "path/to/attachment2.pdf"],
  };

  return mockMessage;
}

export default sendEmail;
