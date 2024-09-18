import { BarChart } from "../../components/charts/BarChart";
import { DashboardCards } from "../../@facke-data/statistics";
import { BsArrowDownLeft, BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";

const Statistics = () => {
  return (
    // Statistics Cards
    <div className="w-full grid xl:grid-cols-4 gap-6 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
      {DashboardCards.map((card) => (
        <div key={card.id} className="bg-white rounded-xl border-[1px] border-border p-5">
          {/* Card Title */}
          <div className="flex gap-4 items-center">
            <span className="w-10 h-10 center bg-opacity-10 rounded-md text-subMain bg-subMain">
              <card.icon />
            </span>
            <h2>{card.title}</h2>
          </div>
          {/* Card Chart & Data */}
          <div className="grid grid-cols-8 gap-4 mt-4 bg-dry py-5 px-8 items-center rounded-xl">
            <div className="col-span-5">
             <BarChart color={card.colors[2]} data={card.data} />
            </div>
            <div className="flex flex-col gap-4 col-span-3">
                <h4 className="text-md font-medium">
                  {card.value}
                  {
                    // if the id === 4 then add the $ sign
                    card.id === 4 ? '$' : '+'
                  }
                </h4>
                <p className={`text-sm flex gap-2 ${card.colors[1]}`}>
                  {card.percent > 50 && <BsArrowUpRight />}
                  {card.percent > 30 && card.percent < 50 && (
                    <BsArrowDownRight />
                  )}
                  {card.percent < 30 && <BsArrowDownLeft />}
                  {card.percent}%
                </p>
              </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
