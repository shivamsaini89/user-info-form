import { Toaster } from "react-hot-toast";
import Form from "./components/Form";

export default function App() {
  return (
    <div className="bg-gradient-to-r from-black via-gray-800 to-black min-h-screen flex flex-col justify-center items-center p-10">
      <div className="w-full max-w-lg">
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
