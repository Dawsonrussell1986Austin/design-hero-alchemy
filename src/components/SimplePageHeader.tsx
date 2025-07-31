interface SimplePageHeaderProps {
  title: string;
}

const SimplePageHeader = ({ title }: SimplePageHeaderProps) => {
  return (
    <div className="relative pt-24 pb-8">
      <div className="container mx-auto px-6">
        <div className="inline-block">
          <div className="bg-obsidian px-8 py-4">
            <h1 className="text-3xl lg:text-4xl font-medium text-silver-mist tracking-wide uppercase">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimplePageHeader;