import { ActionPanel, Detail, List, Action, Icon } from "@raycast/api";
import { useState } from "react";
import ElementDetail from "./ElementDetail";
import ElementSummary from "./ElementSummary";
import periodicTableElements from "./periodic-table-elements.json";

export default function Command() {
  const [isShowingDetail, setIsShowingDetail] = useState(false);

  return (
    <List isShowingDetail={isShowingDetail}>
      {periodicTableElements.map((element) => (
        <List.Item
          key={element.number}
          icon={element.image?.url || ""}
          title={`${("" + element.number).padStart(3, "0")}\t  ${element.name}`}
          subtitle={[element.appearance, element.category].filter((_) => !!_).join(" ")}
          accessories={[{ text: element.symbol, icon: Icon.Info }]}
          actions={
            <ActionPanel>
              <Action title="Show Summary" onAction={() => setIsShowingDetail((isShowingDetail) => !isShowingDetail)} />
              <Action.CopyToClipboard
                title="Copy to clipboard"
                content={`${("" + element.number).padStart(3, "0")}\t  ${element.name}`}
              />
              <Action.Push title="Show full info" target={<ElementDetail element={element} />} />
            </ActionPanel>
          }
          detail={<ElementSummary element={element} />}
        />
      ))}
    </List>
  );
}
