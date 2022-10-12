import React from "react";
import { Detail } from "@raycast/api";
import periodicTableElements from "./periodic-table-elements.json";
import DetailMetadata from "./DetailMetadata";

const ElementDetail = ({ element = periodicTableElements[0] }) => {
  return (
    <Detail
      markdown={`![${element.name}](${element.image.url})`}
      metadata={ <DetailMetadata Detail={Detail} element={element} />  }
    />
  );
};

export default ElementDetail;
