import AppLoading from "@/components/loading/AppLoading";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="h-[90vh] flex items-center justify-center">
      <AppLoading />
    </div>
  );
};

export default Loading;
