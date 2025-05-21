export default function FooterViewer() {
  return (
    <footer className="w-full bg-black py-16 flex flex-col items-center justify-center relative">
      {/* Centered Glow Effect */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 mt-8 w-[500px] h-[250px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, #7c5fe633 0%, #000 80%)",
          filter: "blur(8px)",
        }}
      />
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-white text-5xl font-medium mb-8" style={{ fontFamily: '"Manrope", sans-serif' }}>
          Trade Anytime 
        </h2>
        <div className="flex flex-col items-center gap-2">
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="h-12"
            />
          </a>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-12"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}