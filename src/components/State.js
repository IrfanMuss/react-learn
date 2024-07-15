// komponen State sebagai function yang menerima prop gantiLink
function State({ gantiLink }) {
    return (
      <div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">
              {/* Jika gantiLink kosong, tampilkan "Contact", jika tidak, tampilkan nilai gantiLink */}
              {!gantiLink ? "Contact" : gantiLink}</a>
          </li>
        </ul>
      </div>
    );
  };
  
  export default State;
