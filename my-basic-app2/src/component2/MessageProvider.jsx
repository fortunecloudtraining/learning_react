import MyContext from "./MyContext";

function MessageProvider({ children }) {
  const message = "Hello Students!";

  return (
    <MyContext.Provider value={message}>
      {children}
    </MyContext.Provider>
  );
}

export default MessageProvider;
