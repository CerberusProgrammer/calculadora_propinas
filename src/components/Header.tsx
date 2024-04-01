function Header({ title }: { title: string }) {
  return (
    <>
      <p className="p-4 bg-teal-400 text-white font-black shadow-md text-center text-4xl">
        {title}
        <p className="text-2xl font-normal">de propinas</p>
      </p>
    </>
  );
}

export default Header;
