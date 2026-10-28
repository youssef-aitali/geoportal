const Footer = () => {
  return (
    <div className="w-full h-[80px] flex justify-between items-center">
      <div className="bg-blue-500 flex gap-4 items-center ml-4">
        <div>Couches</div>
        <div>My Maps</div>
        <div>Infos</div>
        <div>Legendes</div>
        <div>Itineraire</div>
      </div>
      <div className="bg-yellow-500 flex gap-4 items-center">
        <div>Dessin</div>
        <div>Mesurer</div>
        <div>Imprimer</div>
        <div>Partager</div>
        <div>Aller vers</div>
      </div>
      <div className="bg-red-500 flex gap-4 items-center mr-4">
        <div>A propos</div>
        <div>Contact</div>
      </div>
    </div>
  );
};

export default Footer;
