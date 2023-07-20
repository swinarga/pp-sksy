function Header() {
  return (
    <div className="flex h-14 w-full items-center justify-center bg-zinc-800 py-12 font-poppins">
      <div className="flex w-full flex-col items-center justify-between gap-3 px-5 text-sky-50 sm:flex-row sm:items-end sm:gap-0 lg:w-2/3 lg:px-0">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Flights CO<sub>2</sub> Tracker
        </h1>
        <a
          href="/faq"
          className="text-2xl hover:cursor-pointer hover:underline sm:text-3xl"
        >
          FAQ
        </a>
      </div>
    </div>
  );
}

export default Header;
