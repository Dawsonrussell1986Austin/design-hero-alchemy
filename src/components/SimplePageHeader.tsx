interface SimplePageHeaderProps {
  title: string;
}

const SimplePageHeader = ({ title }: SimplePageHeaderProps) => {
  return (
    <div className="relative pt-8 pb-4">
      <div className="container mx-auto px-6">
        <div className="inline-block">
          <div className="bg-obsidian/80 backdrop-blur-sm px-6 py-3 rounded-sm">
            <h1 className="text-xl lg:text-2xl font-medium text-silver-mist tracking-wide uppercase">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimplePageHeader;