export function Landing() {
  return (
    <div>
      <main className="min-h-screen w-full relative overflow-hidden">
        {/* Dégradé amélioré en background */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundColor: "#0F1B1B",
            backgroundImage: `url('/ourImages/landing/bg5.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        ></div>

        {/* Overlay subtil pour plus de profondeur */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/30"></div>

        {/* Contenu principal */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-6 py-20">
          {/* Titre principal avec effet subtil */}
          <div className="mb-6 space-y-3">
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight">
              <span className="block text-[#b08243] font-serif italic text-sm md:text-base tracking-widest mb-2 opacity-90">
                Welcome to
              </span>
              <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                JJ's Irish Pub
              </span>
              <span className="block text-3xl md:text-5xl lg:text-6xl mt-2 font-light">
                & Restaurant
              </span>
            </h1>
          </div>

          {/* Ligne décorative */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#b08243]"></div>
            <div className="w-2 h-2 rounded-full bg-[#b08243]"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#b08243]"></div>
          </div>

          {/* Description avec meilleure typographie */}
          <p className="max-w-2xl text-base md:text-lg lg:text-xl text-gray-300 font-light leading-relaxed mb-12 px-4">
            Born in the heart of Bahrain, we bring the warmth, charm, and
            authentic spirit of Ireland to the region. Experience genuine
            hospitality in an atmosphere that feels like home.
          </p>

          {/* Formulaire de réservation amélioré */}
          <div className="mt-4 w-full max-w-6xl mx-auto px-4">
            <form className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-stretch bg-white/5 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-2xl border border-white/10">
              {/* Nombre de personnes */}
              <div className="flex-1 min-w-[200px]">
                <label className="block text-xs text-gray-400 mb-2 text-left ml-1 uppercase tracking-wider">
                  Guests
                </label>
                <select className="w-full p-4 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 focus:bg-white/10 focus:border-[#b08243] outline-none appearance-none cursor-pointer transition-all duration-300 backdrop-blur-sm">
                  <option className="bg-[#1A2A2A]">2 people</option>
                  <option className="bg-[#1A2A2A]">3 people</option>
                  <option className="bg-[#1A2A2A]">4 people</option>
                  <option className="bg-[#1A2A2A]">5 people</option>
                  <option className="bg-[#1A2A2A]">6+ people</option>
                </select>
              </div>

              {/* Date */}
              <div className="flex-1 min-w-[200px]">
                <label className="block text-xs text-gray-400 mb-2 text-left ml-1 uppercase tracking-wider">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full p-4 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 focus:bg-white/10 focus:border-[#b08243] outline-none transition-all duration-300 backdrop-blur-sm"
                  defaultValue="2026-01-29"
                />
              </div>

              {/* Heure */}
              <div className="flex-1 min-w-[200px]">
                <label className="block text-xs text-gray-400 mb-2 text-left ml-1 uppercase tracking-wider">
                  Time
                </label>
                <input
                  type="time"
                  className="w-full p-4 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 focus:bg-white/10 focus:border-[#b08243] outline-none transition-all duration-300 backdrop-blur-sm"
                  defaultValue="19:00"
                />
              </div>

              {/* Bouton de réservation */}
              <button
                type="submit"
                className="md:self-end bg-gradient-to-r from-[#b08243] to-[#c6975a] hover:from-[#c6975a] hover:to-[#d4a569] text-white px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold uppercase tracking-wider transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Find a Table
              </button>
            </form>

            {/* Message d'information subtil */}
            <p className="text-xs text-gray-500 mt-4 text-center">
              Reservations are confirmed instantly • Free cancellation up to 2
              hours before
            </p>
          </div>

          {/* Indicateur de scroll (optionnel) */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <span className="text-xs text-gray-500 uppercase tracking-widest">
                Explore
              </span>
              <svg
                className="w-5 h-5 text-[#b08243]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
