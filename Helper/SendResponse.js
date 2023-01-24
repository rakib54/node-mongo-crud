const SendResponse = (status, message,data, otherData) => {
  return {
    status,
    message,
    data: data || [],
    ...otherData
  };
};

module.exports = SendResponse;