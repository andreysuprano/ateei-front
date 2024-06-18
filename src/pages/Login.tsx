import FormLayout from "../components/FormLayout";
import NavBar from "../components/NavBar";

export function Login() {
  return (
    <>
      <NavBar />
      <FormLayout>
        <div className="mt-28">
          <div className="mb-3">
            <p className="font-semibold text-sm">Codigo Login</p>
            <div className="mt-2">
              <input type="text" className="w-full h-8 rounded-md border-0  pl-2 pr-7 text-gray-500 " />
            </div>
          </div>

          <div>
            <p className="font-semibold text-sm">Senha</p>
            <div className="mt-2 mb-4">
              <input type="password" className="w-full h-8 rounded-md border-0  pl-2 pr-7 text-gray-500"/>
            </div>
          </div>

          <div>
            <button className="cursor-pointer rounded-md  px-4 py-2 text-sm font-semibold text-white w-full mt-4 bg-primary-blue">Entrar</button>
          </div>
        </div>
      </FormLayout>
    </>
  );
}
