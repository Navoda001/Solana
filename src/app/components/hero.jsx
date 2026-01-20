export default function Hero() {
  return (
    <section className="relative bg-[#000000] text-white mx-auto" style={{ fontFamily: 'Helvetica, Arial, sans-serif', maxWidth: '1718px', height: '664px', marginTop: '87px' }}>
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"></div>
      
      <div className="container mx-auto px-6 flex flex-col items-center justify-center h-full text-center">
        {/* Main heading */}
        <h1 style={{ 
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 400,
          fontSize: '70px',
          lineHeight: '75.6px',
          letterSpacing: '0.68px',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          Powerful for developers.
          <br />
          Fast for everyone.
        </h1>
        
        {/* Subtitle */}
        <p style={{
          width: '589px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 400,
          fontSize: '21px',
          lineHeight: '27.3px',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in between.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3 bg-gradient-to-r from-[#000000] to-[#8C01FA] hover:from-[#1a1a1a] hover:to-[#9c1aff] rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 uppercase text-sm tracking-wider">
            Start Building
          </button>
          <button className="px-8 py-3 border-2 border-white hover:bg-white hover:text-[#0a0b1e] rounded-full font-semibold transition-all duration-300 uppercase text-sm tracking-wider">
            Read Docs
          </button>
        </div>
      </div>
    </section>
  );
}