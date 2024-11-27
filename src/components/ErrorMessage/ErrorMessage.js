const ErrorMessage = ({ children }) => {
    return (
      <div
        style={{
            width: "100%",
            padding: 10,
            marginBottom: 10,
            borderRadius: 4,
            backgroundColor: "#ffe6e6",
            textAlign: "center",
            color: "black",
            textTransform: "capitalize",
            borderRadius:'20px',
                                     
        }}
      >
        {children}
      </div>
    );
  };
  
  export default ErrorMessage;