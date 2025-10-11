const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Geosafe - Sistem Monitoring Tanah Longsor Desa Aribaya
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Dikembangkan untuk keselamatan masyarakat Desa Aribaya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
