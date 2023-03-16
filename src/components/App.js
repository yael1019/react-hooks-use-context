import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserProvider } from '../context/user';

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <main className={theme}>
      <UserProvider>
        <Header theme={theme} setTheme={setTheme} setUser={setUser} />
        <Profile theme={theme} />
      </UserProvider>
    </main>
  );
}

export default App;
