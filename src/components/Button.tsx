const Button = ({ title }: { title: string }) => {
    return (
        <button className="bg-white py-2 px-5 rounded-full mt-4 outline outline-1 hover:shadow-[rgba(0,0,0,0.2)_0px_3px_8px] hover:bg-brightGreen hover:text-white transition">
            {title}
        </button>
    );
}

export default Button;