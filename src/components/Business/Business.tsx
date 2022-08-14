import { features } from "../../constants";
import s, { layout } from "../../style";
import Button from "../Button/Button";

interface FeatureCardProps {
  id: string;
  icon: string;
  title: string;
  content: string;
  index: number;
}

const FeatureCard = ({ id, content, icon, title, index }: FeatureCardProps) => (
  <div
    className={`flex flex-row p-6 rounded-2xl ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${s.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-lg mb-1">
        {title}
      </h4>
      <p className="font-poppins text-dimWhite text-base mb-1">{content}</p>
    </div>
  </div>
);

export default function Business() {
  return (
    <div className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={s.heading2}>
          You do the business, <br className="sm:block hidden" /> we&apos;ll
          handle the money.
        </h2>
        <p className={`${s.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, i) => (
          <FeatureCard key={feature.id} {...feature} index={i} />
        ))}
      </div>
    </div>
  );
}
