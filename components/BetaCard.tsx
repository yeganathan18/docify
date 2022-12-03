import { ExperimentOutlined } from "@ant-design/icons";

const BetaCard = () => {
  return (
    <div className="flex flex-col">
        <h2 className="flex flex-row items-center gap-2 text-lg"> <ExperimentOutlined /> We&apos;re currently in Alpha!</h2>
    </div>
  );
};

export default BetaCard;
