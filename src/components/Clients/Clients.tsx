import { clients } from "../../constants";
import s from "../../style";

export default function Clients() {
  return (
    <section className={`${s.flexCenter} my-4`}>
      <div
        className={`${s.flexCenter} flex-wrap w-full gap-y-8 md:gap-y-4 gap-x-4`}
      >
        {clients.map((client) => (
          <div
            className={`flex-1 ${s.flexCenter} sm:min-w-[192px] min-w-[120px]`}
            key={client.id}
          >
            <img
              src={client.logo}
              alt="client"
              className="sm:w-[182px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
