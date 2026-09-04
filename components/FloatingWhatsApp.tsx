const whatsappLink =
  "https://wa.me/5527992634978?text=Ol%C3%A1%21%20Conheci%20a%20DVL3D%20pelo%20site%20e%20gostaria%20de%2020fazer%20um%20pedido.";

export default function FloatingWhatsApp() {
  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-[90] md:bottom-8 md:right-8">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fazer pedido pelo WhatsApp"
        className="pointer-events-auto flex h-14 w-14 touch-manipulation items-center justify-center rounded-full bg-black text-white shadow-xl transition-transform duration-300 hover:scale-105 active:scale-95 md:h-auto md:w-auto md:gap-3 md:px-6 md:py-4"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-current"
        >
          <path d="M12.04 2a9.84 9.84 0 0 0-8.49 14.8L2 22l5.34-1.52A9.9 9.9 0 1 0 12.04 2Zm0 17.82a7.78 7.78 0 0 1-3.97-1.09l-.28-.17-3.17.9.85-3.09-.18-.29a7.77 7.77 0 1 1 6.75 3.74Zm4.26-5.82c-.23-.12-1.38-.68-1.59-.76-.21-.08-.36-.12-.52.12-.15.23-.6.76-.73.91-.14.16-.27.18-.5.06a6.35 6.35 0 0 1-1.87-1.15 6.97 6.97 0 0 1-1.3-1.62c-.14-.23-.01-.35.1-.47.1-.1.23-.27.35-.41.11-.14.15-.24.23-.39.08-.16.04-.29-.02-.41-.06-.12-.52-1.25-.71-1.71-.19-.45-.38-.39-.52-.4h-.44c-.16 0-.41.06-.62.29-.21.23-.81.79-.81 1.93 0 1.13.83 2.23.94 2.38.12.16 1.63 2.49 3.95 3.49.55.24.98.38 1.32.49.55.17 1.05.15 1.45.09.44-.07 1.38-.57 1.57-1.11.2-.55.2-1.02.14-1.11-.06-.1-.21-.16-.44-.27Z" />
        </svg>

        <span className="hidden text-sm font-medium md:block">
          Fazer pedido
        </span>
      </a>
    </div>
  );
}