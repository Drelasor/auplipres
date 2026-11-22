function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <div className="text-2xl font-bold">
        AUPLIPRES
      </div>

      <div className="flex items-center gap-8">
        <a href="/contact">Contact</a>
        <a href="/about"></a>
        <a href="/shop">shop</a>
      </div>
    </nav>
  );
}

export default Navbar;