export default function Footer() {
  return (
    <footer className="sticky bottom-0 left-0 top-[calc(100vh-6rem)] z-0 flex h-40 w-full bg-green-acqua px-8 py-6">
      <div
        aria-label="footer content"
        className="flex h-full w-full items-center justify-center text-center"
      >
        <p>
          Desenvolvido por{" "}
          <a
            className="text-brand-200"
            href="https://github.com/mk-nascimento"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mk Nascimento
          </a>{" "}
          &copy; 2023
        </p>{" "}
      </div>
    </footer>
  );
}
