const Button = (props) => {
    const {variant = 'bg-black', children = '....'} = props;  // Menggunakan destructuring untuk mengambil properti variant dan children dari props. 'bg-black' untuk nilai default variant dan '....' untuk children.

    return (
        <button
            className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}  // Menggunakan template literal untuk menggabungkan nilai kelas CSS sesuai dengan properti variant.
            type="submit" 
        >
            {children}  {/* Menampilkan konten yang berada di dalam tag Button saat digunakan sebagai komponen JSX. */}
        </button>
    );
}

export default Button;