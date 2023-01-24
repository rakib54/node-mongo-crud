const SendResponse = (status, message,data) => {
  return {
    status,
    message,
    data: data || [],
  };
};

module.exports = SendResponse;