interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-bold text-yellow-600 md:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-lg text-yellow-900">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;