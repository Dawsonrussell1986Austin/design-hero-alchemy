interface SimplePageHeaderProps {
  title: string;
}

const SimplePageHeader = ({ title }: SimplePageHeaderProps) => {
  return (
    <div className="relative pt-4 pb-2">
      <div className="container mx-auto px-6">
        <span className="text-sm font-medium text-graphite-fog uppercase tracking-wider">
          {title}
        </span>
      </div>
    </div>
  );
};

export default SimplePageHeader;