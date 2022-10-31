import Layout from "../../components/Layout";

function PressPage() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto space-y-6 p-4">
        <h1 className="text-6xl text-center text-gray-800 font-serif">
          In The News
        </h1>
        <div>
          <a href="#" className="text-xl pl-24 font-serif text-center">
            Doctor.com launches VirtualVisit, a Free Telemed Platform Backed by
            Their Big Data Infrastructure
          </a>
        </div>
      </div>
      <div className="BookaDemo">
        <div className="flex justify-between max-w-4xl mx-auto p-4 items-center">
          <h1 className="text-xl font-serif">Ready to Get Started?</h1>
          <a className="font-serif text-lg border px-6 py-4" href="#">
            Book a Demo
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default PressPage;
