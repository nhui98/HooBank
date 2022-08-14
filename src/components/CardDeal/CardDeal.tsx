import { card } from "../../assets";
import s, { layout } from "../../style";
import Button from "../Button/Button";

export default function CardDeal() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={s.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in a few
          easy steps.
        </h2>
        <p className={`${s.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          dolores exercitationem nisi laudantium dolorum, molestias quos ratione
          aspernatur natus maiores.
        </p>

        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-full h-full" />
      </div>
    </section>
  );
}
