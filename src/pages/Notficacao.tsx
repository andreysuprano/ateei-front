import Button from "../components/Button";
import FormLayout from "../components/FormLayout";
import NavBar from "../components/NavBar";
import ProgressBar from "../components/ProgressBar";

export function Notificacao () {

  return (
    <>
      <NavBar/>
      <FormLayout>
        <section className="w-96">
          <div>
            <p className="font-bold mb-2 text-lg">Notificações e Alertas</p>
            <ProgressBar/>
            <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi aliquid laborum!</p>
          </div>

          <div className="checkboxs mt-7 mb-4">
            <p className="font-semibold text-sm">Software de utilização</p>
            <div className="flex mt-3">
              <div className="flex items-center me-4">
                <input type="checkbox" name="" id="" className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"/>
                <label htmlFor="" className="ms-2 text-sm text-gray-900">Envio de Email</label>
              </div>
              <div className="flex items-center me-4">
                <input type="checkbox" name="" id="" className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"/>
                <label htmlFor="" className="ms-2 text-sm text-gray-900">Envio de Mensagem SMS</label>
              </div>
            </div>
          </div>

          <div className="checkboxs mt-7 mb-4">
            <p className="font-semibold text-sm">Idioma</p>
            <div className="flex mt-3">
              <div className="flex items-center me-4">
                <input type="checkbox" name="" id="" className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"/>
                <label htmlFor="" className="ms-2 text-sm text-gray-900">Português</label>
              </div>
              <div className="flex items-center me-4">
                <input type="checkbox" name="" id="" className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"/>
                <label htmlFor="" className="ms-2 text-sm text-gray-900">Inglês</label>
              </div>
              <div className="flex items-center me-4">
                <input type="checkbox" name="" id="" className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded"/>
                <label htmlFor="" className="ms-2 text-sm text-gray-900">Espanhol</label>
              </div>
            </div>
          </div>
          <Button action={() => {}} color="bg-primary-blue" text="Proximo"/>
        </section>
      </FormLayout>
    </>
  )
}
