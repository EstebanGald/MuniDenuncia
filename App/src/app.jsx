import { RuteadorLogin } from "./components/router";
import "./js/user_functions/login";
import "./js/user_functions/user_bd";
import "/js/user_functions/user_checks";
function App() {
    return(
      <RuteadorLogin />
    );
}

export default App;

/*
import { AppRouter } from "./router/AppRouter";
import { AuthProvider } from "./auth/AuthContext";
import "./App.css";
import { SocketProvider } from "./context/SocketContext";
import { ChatProvider } from "./context/chat/ChatContext";

function App() {
  return (
    <ChatProvider>
      <AuthProvider>
        <SocketProvider>
          <AppRouter />
        </SocketProvider>
      </AuthProvider>
    </ChatProvider>
  );
}

export default App;
*/