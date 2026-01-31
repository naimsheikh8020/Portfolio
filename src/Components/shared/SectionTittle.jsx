
const SectionTittle = ({head,tittle1,tittle2,subTittle,color}) => {
    return (
        <div className='text-center  pb-10'>
            <h5 className={`text-${color} text-sm rounded-full bg-gray-700 btn hover:bg-gray-700 cursor-auto px-3 py-1 min-h-0 h-auto border-none`}>{head}</h5>
            <h2 className='text-3xl md:text-4xl text-white font-bold p-5'>{tittle1} <span className='bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text'>{tittle2}</span></h2>
            {subTittle&& <p className='max-w-[600px] mx-auto text-gray-200'>{subTittle}</p>}
            
        </div>
    );
};

export default SectionTittle;