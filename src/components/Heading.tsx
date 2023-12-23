const Heading = ({ title, subTitle }: { title: string; subTitle: string }) => {
    return (
        <div className="w-full flex items-center gap-2 justify-center">
            <h3 className="text-4xl font-semibold">{title}</h3>
            <span className="text-4xl font-semibold text-brightGreen">{subTitle}</span>
        </div>
    );
};

export default Heading;
