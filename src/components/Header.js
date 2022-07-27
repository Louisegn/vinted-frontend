// Créer un composant Header dans lequel figurera le logo et trois boutons (s'inscrire, se connecter et vends tes articles ).

const Header = () => {
  return (
    <div className="vinted-header">
      <p>Vinted</p>
      <div>
        <button>S'inscrire</button>
        <button>Se connecter</button>
        <button>Vends tes articles</button>
      </div>
    </div>
  );
};

export default Header;
