const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-8 mt-10">
      <div className="max-w-site mx-auto px-4 text-center text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} BeingBifrons. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;