const ListItem = ({data}) => {
    var divide = data?.content?.split(":");
    var proofs = divide[0].split(",");
    console.log(proofs);
    // var approvers = divide[1].split(",");
    return(
        <div className="flex flex-col gap-2 rounded-2xl bg-gray-50 m-5 px-10 py-5">
            <div className="text-xl font-bold">
                {data.name}
            </div>
            <div>
                {data.description}
            </div>
            <div className=" font-semibold text-m">
                Required Proofs
            </div>
            <ul className=" list-disc">
                {proofs && proofs.map((item,index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <div className="flex w-full justify-end">
                <div className=" px-5 py-2 bg-pink-500 rounded-lg shadow-lg text-white hover:cursor-pointer">
                    Apply
                </div>
                
            </div>
            
        </div>
    );
}

export default ListItem;