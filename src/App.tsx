import "./styles.css";
import WebApp from "@twa-dev/sdk";

export default function App() {
  return (
    <div className="App">
      <h1>Hello My App Telegram</h1>
      <h1>{WebApp.initData}</h1>
    </div>
  );
}
