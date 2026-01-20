export default function SubContainer() {
  return (
    <section className="bg-black text-white py-20 px-6" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <div className="mx-auto" style={{ maxWidth: '1200px', gap: '60px', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <div style={{ paddingRight: '200px', gap: '14px', display: 'flex', flexDirection: 'column' }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Effortless Property Management
          </h2>
          <p className="text-gray-400 text-base max-w-4xl leading-relaxed">
            Owning a property should be a pleasure, not a hassle. Estafain's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '24px' }}>
          {/* Row 1 - Three cards */}
          {/* Tenant Harmony Card */}
          <div className="bg-black border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center border border-purple-500/30">
                <svg className="w-7 h-7 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="4" y="4" width="6" height="6" rx="1"/>
                  <rect x="14" y="4" width="6" height="6" rx="1"/>
                  <rect x="4" y="14" width="6" height="6" rx="1"/>
                  <rect x="14" y="14" width="6" height="6" rx="1"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Tenant Harmony</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.
            </p>
          </div>

          {/* Maintenance Ease Card */}
          <div className="bg-black border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center border border-purple-500/30">
                <svg className="w-7 h-7 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Maintenance Ease</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.
            </p>
          </div>

          {/* Financial Peace of Mind Card */}
          <div className="bg-black border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center border border-cyan-500/30">
                <svg className="w-7 h-7 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Financial Peace of Mind</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Managing property finances can be complex. Our financial experts take care of rent collection.
            </p>
          </div>

          {/* Row 2 - Legal Guardian and CTA */}
          {/* Legal Guardian Card */}
          <div className="bg-black border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center border border-purple-500/30">
                <svg className="w-7 h-7 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1 14.5l-3.5-3.5L9 11.5l2 2 4.5-4.5L17 10.5l-6 6z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Legal Guardian</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Stay compliant with property laws and regulations effortlessly.
            </p>
          </div>

          {/* Large CTA Card - spans 2 columns */}
          <div className="md:col-span-2 border border-gray-800 rounded-xl p-8 flex flex-col justify-between hover:border-gray-700 transition-all duration-300" style={{
            background: `
              repeating-linear-gradient(
                45deg,
                #1a1a1a,
                #1a1a1a 10px,
                #0f0f0f 10px,
                #0f0f0f 20px
              )
            `
          }}>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                Experience Effortless Property Management
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.
              </p>
            </div>
            <div className="flex justify-end">
              <button className="px-6 py-3 bg-gradient-to-r from-[#000000] to-[#8C01FA] hover:from-[#1a1a1a] hover:to-[#9c1aff] rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}