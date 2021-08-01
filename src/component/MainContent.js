import React from 'react'

const MainContent = ({data}) => {
    return (
        <div>
            <div className="mt-20 mb-24 border-top-2 flex flex-col border-black">
               <h1 className="text-center w-full text-3xl font-bold uppercase border-bottom-black border-2 text-blue-500">{data.name}</h1>
               <div className="mt-16 w-full flex flex-col">
                <img src={data.flag} alt="flag" width="20%" height="20%" className="text-center justify-items-center flex mx-auto mb-7"/>
                <div className="mx-auto my-2 font-bold border-2 border-top-black p-3"> 
                <h1 ><span className="text-red-700 uppercase mr-3 text-lg">Region : </span>{data.region}</h1>
                <h1 ><span className="text-red-700 uppercase mr-3 text-lg">Alpha-Code : </span>{data.alpha3Code}</h1>
                <h1 ><span className="text-red-700 uppercase mr- text-lg">Calling-Code : </span>{data.callingCodes[0]}</h1>
                <h1 ><span className="text-red-700 uppercase mr-3 text-lg">Demonym : </span>{data.demonym}</h1>
                <h1 ><span className="text-red-700 uppercase mr-3 text-lg">Native-name : </span>{data.nativeName}</h1>
                <h1 ><span className="text-red-700 uppercase mr-3 text-lg">Capital : </span>{data.capital}</h1>
                <h1><span className="text-red-700 uppercase mr-3 text-lg">Population : </span>{data.population} </h1>
                <h1><span className="text-red-700 uppercase mr-3 text-lg">Area : </span>{data.area} km²</h1>
                <h1><span className="text-red-700 uppercase mr-3 text-lg">Languages : </span>{data.languages[0].name}, Native Language : {data.languages[0].nativeName}</h1>
                <h1><span className="text-red-700 uppercase mr-3 my-3">Code : </span>{data.numericCode}</h1>
                <h1><span className="text-red-700 uppercase mr-3 my-3">Regional-block : </span>{data.regionalBlocs.length !== 0?data.regionalBlocs.map((item,index)=>(
                    <span key={index}>{item.name}</span>
                )) : <span>Nan</span>}</h1>
                <h1><span className="text-red-700 uppercase mr-3 text-lg">Sub-Region : </span>{data.subregion}</h1>
                <h1><span className="text-red-700 uppercase mr-3 text-lg">Timezone : </span>{data.timezones.map((item,index)=>(
                    <span>{item}</span>
                ))}</h1>
                <h1><span className="text-red-700 uppercase mr-3 text-lg">Domain : </span>{data.topLevelDomain[0]}</h1>
                <h1><span className="text-red-700 uppercase mr-3 text-lg">Borders : </span>{data.borders.map((item,index)=>(
                    <span key={index}>{item} ,</span>
                ))}</h1>
                <h1><span className="text-red-700 uppercase mr-3 text-lg">Currence : </span>{data.currencies.map((item,index) =>(
                         <span>{item.code} , {item.name}</span>
                ))}</h1>
                </div>
               </div>
            </div>
            
        </div>
    )
}

export default MainContent
