
const Specification = ({tittle,subTittle}) => {
    return (
        <div className="text-[1.0625rem] md:text-lg">
            <h4 className="text-primary ">{tittle}</h4>
            <p className="text-white">{subTittle}</p>
        </div>
    );
};

export default Specification;