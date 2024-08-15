import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 bg-gray-100">
      {/* Header Section */}
      <div className="text-center max-w-5xl">
        <h1 className="text-4xl font-bold mb-8">Welcome to Calm Play</h1>
        <p className="text-lg mb-4">
          Your ultimate destination for mindfulness and relaxation through
          engaging and fun activities.
        </p>
        <p className="text-lg mb-8">
          Explore a variety of games and tech tools designed to help you unwind
          and de-stress.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="px-8 py-3 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-full max-w-xl mt-12">
        <Image
          className="rounded-xl shadow-lg"
          src="/images/keep-calm.png"
          alt="Keep Calm"
          width={800}
          height={400}
          priority
        />
      </div>

      {/* Features Section */}
      <section id="features" className="mt-24">
        <h2 className="text-3xl font-bold mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Relaxing Games</h3>
            <p>
              Choose from a selection of games designed to calm your mind and
              reduce stress.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Mindful Tech</h3>
            <p>
              Explore tech tools that help you practice mindfulness and achieve
              serenity.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Community Support</h3>
            <p>
              Connect with others who share your journey towards a more relaxed
              and mindful life.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="mt-24 text-center text-gray-600">
        <p>&copy; 2024 Calm Play. All rights reserved.</p>
      </footer>
    </main>
  );
}
