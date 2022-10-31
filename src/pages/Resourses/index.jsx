import Layout from "../../components/Layout";
import CarouselGallery from "./components";
import "./components/index.css";
function ResourcesPage() {
  return (
    <Layout>
      <div className="space-y-12">
        <div>
          <h1 className="text-5xl font-semibold font-serif text-center">
            Free Resources
          </h1>
        </div>
        <section>
          <div className="videoBG bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto p-6 ">
              <h1 className="p-2 text-xl font-serif items-center">VIDEOS</h1>
              <CarouselGallery />
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto font-bold">
          <h1>FROM THE BLOG</h1>
          <div>
            <div className="grid grid-cols-2 gap-8">
              <img
                className="clinicImg"
                src="https://c0.wallpaperflare.com/preview/386/354/385/analysis-hospital-doctor-medical.jpg"
              />
              <div className="space-y-8">
                <p className="text-2xl font-semibold">
                  Embracing transparency: How Nebraska Medicine persuaded 1,000+
                  physicians to publicize their ratings and reviews
                </p>
                <p className="text-md">
                  Nebraska Medicine has served the Omaha metropolitan area for
                  over 150 years. Today, with 1,000+ physicians operating out of
                  more than 40 health centers and two hospitals, the network
                  continues to deliver on its promise: Serious medicine,
                  extraordinary care. While…
                </p>
                <button className="border p-2 px-4 border-black">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2">
              <div className="w-96 h-64 grid grid-cols-2 pt-6 space-x-2">
                <img src="https://i.pinimg.com/236x/aa/f3/c8/aaf3c8404ffeda97b2958597b608d970--brick-garden-garden-walls.jpg" />
                <div className="w-64">
                  <h1 className="text-sm">
                    Stop competitors from stealing your leads: What the “walled
                    garden” means for pharmaceutical marketers
                  </h1>
                </div>
              </div>
              <div className="w-96 h-64 grid grid-cols-2 pt-6 space-x-2">
                <img src="https://i.pinimg.com/236x/aa/f3/c8/aaf3c8404ffeda97b2958597b608d970--brick-garden-garden-walls.jpg" />
                <div className="w-64">
                  <h1 className="text-sm">
                    Stop competitors from stealing your leads: What the “walled
                    garden” means for pharmaceutical marketers
                  </h1>
                </div>
              </div>
              <div className="w-96 h-64 grid grid-cols-2 pt-6 space-x-2">
                <img src="https://i.pinimg.com/236x/aa/f3/c8/aaf3c8404ffeda97b2958597b608d970--brick-garden-garden-walls.jpg" />
                <div className="w-64">
                  <h1 className="text-sm">
                    Stop competitors from stealing your leads: What the “walled
                    garden” means for pharmaceutical marketers
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default ResourcesPage;
