import { PropsChildren } from "../types/common/common";
import ProviderMovie from "./Movie/ProviderMovie";
import ProviderSeries from "./Series/ProviderSeries";
import ProviderCommon from "./Common/ProviderCommon";

const ProviderWrapper = ({ children }: PropsChildren) => {
  return (
    <ProviderMovie>
      <ProviderSeries>
        <ProviderCommon>{children}</ProviderCommon>
      </ProviderSeries>
    </ProviderMovie>
  );
};

export default ProviderWrapper;
