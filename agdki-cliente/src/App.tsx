import { ClienteLayout } from "./layout/client-layout.tsx";
import { Login } from "./page/public/login.tsx";
import PWABadge from "./PWABadge.tsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <ClienteLayout>
        <Login userRolekey="" />
      </ClienteLayout>
      <PWABadge />
    </>
  );
}

export default App;
