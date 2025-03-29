import Section from './Section';

const SectionPart = ({ sections }) => {
  return (
    <div>
      {sections?.map((section) => (
        <Section key={section._id} data={section} />
      ))}
    </div>
  );
};
export default SectionPart;
