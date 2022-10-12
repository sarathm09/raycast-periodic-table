import { List } from "@raycast/api";
import DetailMetadata from "./DetailMetadata";
import periodicTableElements from "./periodic-table-elements.json";

const ElementSummary = ({ element }) => {

  const Detail = List.Item.Detail

  return (
    <List.Item.Detail
      markdown={`![${element.name}](${element.bohr_model_image})`}
      metadata={ <DetailMetadata Detail={Detail} element={element} /> }
    />
  );
};

export default ElementSummary;
