import * as Dialog from "@radix-ui/react-dialog";

interface CardProps {
  note: {
    date: Date
    content: string
  }
}

export function Card({note}: CardProps) {
  return (
    <Dialog.Root>
        <Dialog.Trigger className="rounded-md bg-red-900 p-5 gap-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-red-600 text-left focus-visible:ring-2 focus-visible:ring-lime-400 flex-col">
          <span className="text-sm font-medium text-red-400">
            {note.date.toISOString()}
          </span>
          <p className="text-sm leading-6 text-red-300">
            {note.content}
          </p>

          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none"></div>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="inset-0 fixed bg-black/60"/>
          <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            Oi
          </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
  );
}
