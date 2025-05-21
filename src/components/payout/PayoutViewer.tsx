export default function PayoutViewer() {
  return (
    <section className="w-full flex flex-col relative overflow-hidden min-h-[500px]">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        src="https://framerusercontent.com/assets/xECpz8zWZNwZhoPNVva63Z5xs.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          borderRadius: 0,
          backgroundColor: "rgba(184, 7, 7, 0)",
          objectPosition: "50% 50%",
        }}
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <span
            className="px-6 py-3 mb-2 border border-white/25 rounded-[20px] font-semibold text-[#b195f0]"
            style={{
              fontFamily: '"Manrope", "Manrope Placeholder", sans-serif',
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: "16px",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "rgba(255,255,255,0.25)",
              opacity: 1,
            }}
          >
            Payouts
          </span>
          <h1
            className="text-center font-medium"
            style={{
              fontFamily: '"Manrope", "Manrope Placeholder", sans-serif',
              fontSize: "36px",
              fontStyle: "normal",
              fontWeight: 500,
              letterSpacing: "-0.05em",
              lineHeight: "40px",
              color: "#fff",
              textTransform: "none",
              textDecoration: "none",
            }}
          >
            We've Paid Out Over <br />
            <span
              className="font-bold"
              style={{
                fontWeight: 500,
                fontStyle: "normal",
                fontFamily: '"Manrope", "Manrope Placeholder", sans-serif',
              }}
            >
              $1M to Traders
            </span>
          </h1>
          <p className="text-white">Your Trust is Our Fuel—Power Up with Abcd</p>
          <span
            className="text-center mt-8"
            style={{
              fontFamily: '"Manrope", "Manrope Placeholder", sans-serif',
              fontSize: "5rem",
              fontStyle: "normal",
              fontWeight: 500,
              letterSpacing: "-0.05em",
              lineHeight: "40px",
              color: "#fff",
              textTransform: "none",
              textDecoration: "none",
            }}
          >
            $999,716+
          </span>
        </div>
        {/* Centered Button */}
        <div className="flex flex-1 items-center justify-center w-full mt-8">
          <button className="relative px-6 py-3 rounded-xl text-white font-medium bg-black overflow-hidden border-2 border-[#ccc] group"
          >
            Are you Next? &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}