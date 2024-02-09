import * as Dialog from "@radix-ui/react-dialog";
import { formatDistanceToNow } from "date-fns"; 
import { ptBR } from "date-fns/locale";
import { X } from "lucide-react";

interface CardProps {
  note: {
    date: Date;
    content: string;
  };
}

export function Card({ note }: CardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md bg-red-900 p-5 gap-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-red-600 text-left focus-visible:ring-2 focus-visible:ring-lime-400 flex-col">
        <span className="text-sm font-medium text-red-400">
          {formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}
        </span>
        <p className="text-sm leading-6 text-red-300">{note.content}</p>

        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none"></div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/60" />
        <Dialog.Content className="fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full bg-red-700 flex flex-col outline-none h-[60vh]">
          <Dialog.Close className="absolute right-0 top-0 bg-red-800 p1.5 text-red-400 hover:text-red-100">
            <X className="size-7" />
          </Dialog.Close>

          <div className="flex flex-1 flex-col gap-3 p-5">
            <span className="text-sm font-medium text-red-400">
            {formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}
            </span>
            <p className="text-sm leading-6 text-red-300">{note.content}</p>
          </div>

          <button className="w-full bg-red-800 py-4 text-center text-sm text-red-200 outline-none font-medium group">
            Deseja <span className="text-blue-300 group-hover:underline">apagar está nota</span>?
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
