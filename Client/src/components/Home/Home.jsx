import React from "react";
import Navbar from "../Navbar/Navbar";

export default function Home() {
  return (
    <>    <div className=" min-h-screen bg-gradient-to-t from-[#f17f55] to-[#8046c3]">
      {/* Navbar */}
      {/* <nav className="bg-black bg-opacity-10 backdrop-blur-xl fixed top-0 left-0 h-16 right-0 z-30 px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-white rounded-full p-2">
            <span className="text-xl font-bold">S</span>
          </div>
          <span className="text-white text-xl font-semibold">sweatcoin</span>
        </div>
        <button className="text-white" aria-label="Menu">
          <Menu className="h-6 w-6" />
        </button>
      </nav> */}
      <Navbar />

      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-32 text-center">
        <h1 className="text-white text-5xl md:text-7xl font-bold mb-4">
          It pays to walk.
        </h1>
        <p className="text-white/90 text-xl mb-8">
          Healthier planet. Healthier, wealthier you.
        </p>

        {/* Hero Image */}
        <div className="relative w-full  mx-auto h-[300px] mb-8 flex justify-center items-center">
          <img
            src="/1.png"
            alt="Walking shoes illustration"
            className="object-contain  h-full absolute"
          />
          <img
            src="/2.png"
            alt="Walking shoes illustration"
            className="object-contain  h-full absolute"
          />
          <img
            src="/4.png"
            alt="Walking shoes illustration"
            className="object-contain  h-full absolute"
          />
          <img
            src="/3.png"
            alt="Walking shoes illustration"
            className="object-contain  h-full absolute"
          />
        </div>

        <button className="bg-white text-purple-900 hover:bg-white/90 px-4 py-2 rounded">
          How to Spend
        </button>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-8 max-w-md mx-auto mt-16 text-white">
          <div>
            <h2 className="text-4xl font-bold">170M+</h2>
            <p  className="text-white/80">REGISTERED USERS</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">1BN</h2>
            <p className="text-white/80">USERS TO COME</p>
          </div>
        </div>

        {/* Vision Section */}
        <section className="mt-16 text-white">
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="max-w-2xl mx-auto text-white/90">
            Sweatcoin is a free app which rewards your daily steps with a
            new-generation currency you can spend on cool products or donate to
            charity.
          </p>
        </section>

        {/* App Ratings */}
        <div className="flex flex-wrap justify-center gap-4">
        <div className="bg-white/10 rounded-lg p-4 mt-16 max-w-xs">
        <img
                    src="/charmander-r.png"
                    alt="App Store"
                    className="h-190"
                   
                  />
            {/* <h3 className="text-white text-xl mb-4">
              WHAT OTHERS SAY ABOUT US
            </h3>
            <div className="text-white text-2xl font-bold mb-4">
              MEN'S JOURNAL
            </div>
            <p className="text-white/90 italic mb-6">
              "Basically pays you to move and exercise, and it costs nothing to
              use"
            </p> */}
            {/* <div className="flex justify-center gap-4">
              <div className="text-white">
                <div className="flex items-center gap-2">
                  <img
                    src="/charmander.png"
                    alt="App Store"
                    width={24}
                    height={24}
                  />
                  <span className="font-bold">4.6</span>
                </div>
                <p className="text-sm text-white/80">APP STORE RATING</p>
              </div>
              <div className="text-white">
                <div className="flex items-center gap-2">
                  <img
                    src="/charmeleon.png"
                    alt="Google Play"
                    width={24}
                    height={24}
                  />
                  <span className="font-bold">4.4</span>
                </div>
                <p className="text-sm text-white/80">PLAY STORE RATING</p>
              </div>
            </div> */}
          </div>

          <div className="bg-white/10 rounded-lg p-4 mt-16 max-w-xs">
          <img
                    src="/charizard-r.png"
                    alt="App Store"
                    className="h-150"
                   
                  />
            {/* <h3 className="text-white text-xl mb-4">
              WHAT OTHERS SAY ABOUT US
            </h3>
            <div className="text-white text-2xl font-bold mb-4">
              MEN'S JOURNAL
            </div>
            <p className="text-white/90 italic mb-6">
              "Basically pays you to move and exercise, and it costs nothing to
              use"
            </p>
            <div className="flex justify-center gap-4">
              <div className="text-white">
                <div className="flex items-center gap-2">
                  <img
                    src="/charizard.png"
                    alt="App Store"
                    width={24}
                    height={24}
                  />
                  <span className="font-bold">4.6</span>
                </div>
                <p className="text-sm text-white/80">APP STORE RATING</p>
              </div>
              <div className="text-white">
                <div className="flex items-center gap-2">
                  <img
                    src="/placeholder.svg?height=24&width=24"
                    alt="Google Play"
                    width={24}
                    height={24}
                  />
                  <span className="font-bold">4.4</span>
                </div>
                <p className="text-sm text-white/80">PLAY STORE RATING</p>
              </div>
            </div> */}
          </div>

          <div className="bg-white/10 rounded-lg p-4 mt-16 max-w-xs">
          <img
                    src="/Charmeleon-r.png"
                    alt="App Store"
                    className="h-150"
                   
                  />
            {/* <h3 className="text-white text-xl mb-4">
              WHAT OTHERS SAY ABOUT US
            </h3>
            <div className="text-white text-2xl font-bold mb-4">
              MEN'S JOURNAL
            </div>
            <p className="text-white/90 italic mb-6">
              "Basically pays you to move and exercise, and it costs nothing to
              use"
            </p>
            <div className="flex justify-center gap-4">
              <div className="text-white">
                <div className="flex items-center gap-2">
                  <img
                    src="/placeholder.svg?height=24&width=24"
                    alt="App Store"
                    width={24}
                    height={24}
                  />
                  <span className="font-bold">4.6</span>
                </div>
                <p className="text-sm text-white/80">APP STORE RATING</p>
              </div>
              <div className="text-white">
                <div className="flex items-center gap-2">
                  <img
                    src="/placeholder.svg?height=24&width=24"
                    alt="Google Play"
                    width={24}
                    height={24}
                  />
                  <span className="font-bold">4.4</span>
                </div>
                <p className="text-sm text-white/80">PLAY STORE RATING</p>
              </div>
            </div>*/}
          </div> 
        </div>

        {/* Footer */}
        <footer className="mt-16 pb-8">
          <p className="text-white text-xl font-bold">Walk. Earn...</p>
          <p className="text-white/80 mt-2">A few simple steps</p>
        </footer>
      </main>
    </div>
    </>

  );
}
