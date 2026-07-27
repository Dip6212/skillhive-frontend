interface Props {
  logo: string;
  name: string;
}

const PartnerLogo = ({ logo, name }: Props) => {
  return (
    <div
      className="
      mx-8
      flex
      h-20
      w-40
      shrink-0
      items-center
      justify-center
      rounded-2xl
      bg-black
      border
      border-slate-200
      shadow-sm
      transition-all
      duration-300
      hover:shadow-lg
      "
    >
      <img
        src={logo}
        alt={name}
        className="h-auto w-100% object-contain"
      />
    </div>
  );
};

export default PartnerLogo;