import {
  Business,
  Billing,
  CardDeal,
  Clients,
  CallToAcion,
  // Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components";

import s from "./style";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* navbar */}
      <div className={`${s.paddingX} ${s.flexCenter}`}>
        <div className={`${s.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      {/* hero */}
      <div className={`bg-primary ${s.flexStart}`}>
        <div className={`${s.boxWidth}`}>
          <Hero />
        </div>
      </div>
      {/* hero */}
      <div className={`bg-primary ${s.paddingX} ${s.flexStart}`}>
        <div className={`${s.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CallToAcion />
        </div>
      </div>
    </div>
  );
}

export default App;
