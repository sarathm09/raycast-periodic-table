
const DetailMetadata = ({ element , Detail }) => {
  return (
    <Detail.Metadata>
      <Detail.Metadata.Label title="Name" text={element.name} />
      <Detail.Metadata.Label title="Atomic Number" text={element.number + ""} />
      <Detail.Metadata.Label title="Symbol" text={element.symbol} />
      <Detail.Metadata.Label title="Phase" text={element.phase} />
      <Detail.Metadata.Label title="Appearance" text={element.appearance || ""} />
      <Detail.Metadata.Label title="Discovered By" text={element.discovered_by || ""} />
      <Detail.Metadata.Label title="Named By" text={element.named_by || ""} />
      <Detail.Metadata.Label title="Electronic configuration" text={element.electron_configuration} />
      <Detail.Metadata.TagList title="Category">
        <Detail.Metadata.TagList.Item text={element.category} color={`#${element["cpk-hex"]}`} />
      </Detail.Metadata.TagList>
      <Detail.Metadata.Label title="Summary" text={`${element.summary || ''}`} />
      
      <Detail.Metadata.Separator />

      <Detail.Metadata.Label title="Atomic mass" text={`${element.atomic_mass || ''}`} />
      <Detail.Metadata.Label title="Density" text={`${element.density || ''}`} />
      <Detail.Metadata.Label title="Boiling point" text={`${element.boil || ''}`} />
      <Detail.Metadata.Label title="Melting point" text={`${element.melt || ''}`} />
    </Detail.Metadata>
  );
};

export default DetailMetadata;
