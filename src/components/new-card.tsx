import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";

export function NewCard() {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true)

  function handleStartEditor() {
    setShouldShowOnboarding(false)
  }

  function handleContentChange(event: ChangeEvent<HTMLTextAreaElement>) {
      if (event.target.value === '') {
       setShouldShowOnboarding(true) 
      }
  }

  function handleSaveNote(event: FormEvent) {
    event.preventDefault()

    toast.success('Nota criado com sucesso!')
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md flex flex-col bg-red-800 p-5 gap-3 text-left outline-none hover:ring-2 hover:ring-red-600 focus-visible:ring-2 focus-visible:ring-lime-400">
          <span className="text-sm font-medium text-red-200">
            Adicionar nota
          </span>
          <p className="text-sm leading-6 text-red-300 overflow-hidden">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
            perferendis placeat porro, maxime mollitia quidem fugiat deleniti
            est corrupti doloremque quam quos id culpa, voluptas quae quod
            quasi. Molestias, laudantium.
          </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/60" />
        <Dialog.Content className="fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full bg-red-700 flex flex-col outline-none h-[60vh]">
          <Dialog.Close className="absolute right-0 top-0 bg-red-800 p1.5 text-red-400 hover:text-red-100">
            <X className="size-7" />
          </Dialog.Close>
          
          <form onSubmit={handleSaveNote} className="flex-1 flex flex-col">
            <div className="flex flex-1 flex-col gap-3 p-5">
              <span className="text-sm font-medium text-red-400">
                Adicionar nota
              </span>

              {shouldShowOnboarding ? (
                <p className="text-sm leading-6 text-red-300">
                Comece <button className="text-green-400 hover:underline">gravando uma nota</button> em áudio ou se preferir <button onClick={handleStartEditor}  className="text-green-400 hover:underline">utilize apenas texto</button>
                </p>
              ) : (
                <textarea autoFocus className="text-sm leading-6 text-red-400 bg-transparent resize-none flex-1 outline-none" onChange={handleContentChange}></textarea>
              )}
            </div>

            <button type="submit" className="w-full bg-green-700 py-4 text-center text-sm text-green-950 outline-none font-medium hover:bg-green-400">
              Salvar nota
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
