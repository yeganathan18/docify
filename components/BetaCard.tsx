import {
  ExperimentOutlined,
  GithubOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const BetaCard = () => {
  return (
    <div className="flex flex-col w-60">
      <h2 className="flex flex-row items-center gap-2 text-lg">
        {" "}
        <ExperimentOutlined /> Alpha Warning!
      </h2>
      <p className="text-sm text-justify leading-5 mt-2">
        We&apos;re working on a lot of cool features. This is a alpha version of
        the app. Please report any bugs you find on our{" "}
        <a
          href="https://github.com/yeganathan18/docify"
          target="_blank"
          rel="noreferrer"
          className="font-bold"
        >
          GitHub
        </a>
        .
      </p>
      <div className="flex flex-row gap-2 mt-4">
        <p className="text-xs text-gray-800">© 2022 Docify</p>
        {/* <GithubOutlined />
        <TwitterOutlined /> */}
      </div>
    </div>
  );
};

export default BetaCard;
