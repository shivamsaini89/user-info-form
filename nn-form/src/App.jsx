import { Toaster } from "react-hot-toast";
import Form from "./components/Form";

export default function App() {
  return (
    <div className="bg-[url(/src/assets/form-bg.jpg)] bg-no-repeat bg-cover min-h-screen flex flex-col justify-center items-center p-10">
      <div className="w-screen max-w-lg">
        <Form />
      </div>
      <Toaster
        toastOptions={{
          removeDelay: 500,
        }}
      />
    </div>
  );
}
