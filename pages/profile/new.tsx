import { UserOutlined } from "@ant-design/icons";

const Progress = () => {
  return (
    <div className="flex flex-col px-4 py-4">
      <h2 className="text-lg bg-slate-300 py-2 px-4 w-max">
        Document: Loan Application
      </h2>
      <h2 className="text-lg py-8 w-max">Parties:</h2>
      <div className="flex flex-col gap-4 mt-4">
        <div>
          <UserOutlined /> Party 1
        </div>
      </div>
    </div>
  );
};

export default Progress;
